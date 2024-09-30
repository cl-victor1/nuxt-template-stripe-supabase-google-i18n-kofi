import { createClient } from '@supabase/supabase-js'
import { defineEventHandler, readBody } from 'h3'
import { OAuth2Client } from 'google-auth-library'

// Initialize Supabase client
const config = useRuntimeConfig()
const supabaseUrl = config.supabaseUrl
const supabaseKey = config.supabaseServiceRoleKey
const supabase = createClient(supabaseUrl, supabaseKey)

const googleClient = new OAuth2Client(config.public.GOOGLE_CLIENT_ID)

export default defineEventHandler(async (event) => {
  const { credential } = await readBody(event)

  if (!credential) {
    return { success: false, error: 'No credential provided' }
  }

  try {
    // Verify the Google token
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: config.public.GOOGLE_CLIENT_ID,
    })
    const payload = ticket.getPayload()
    if (!payload) {
      throw new Error('Invalid payload')
    }

    // Store user information in Supabase
    const { data, error } = await supabase
      .from('users')
      .upsert({
        google_id: payload.sub,
        full_name: payload.name,
        given_name: payload.given_name,
        family_name: payload.family_name,
        picture_url: payload.picture,
        email: payload.email,
        updated_at: new Date().toISOString()
      }, { 
        onConflict: 'google_id'
      })
      .select()
    
    if (error) throw error
    if (!data) {   
      return { success: false, error: 'No user data returned' }
    }

    return { success: true, user: data[0] }
  } catch (error) {
    console.error('Error processing user data:', error)
    return { success: false, error: 'Failed to process user data' }
  }
})