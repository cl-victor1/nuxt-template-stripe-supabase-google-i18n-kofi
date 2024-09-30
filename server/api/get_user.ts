import { createClient } from '@supabase/supabase-js'
import { defineEventHandler, readBody } from 'h3'

const config = useRuntimeConfig()
const supabaseUrl = config.supabaseUrl
const supabaseKey = config.supabaseServiceRoleKey
const supabase = createClient(supabaseUrl, supabaseKey)

export default defineEventHandler(async (event) => {
  const { userId } = await readBody(event)

  if (!userId) {
    return { success: false, error: 'No user ID provided' }
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) throw error
    if (!data) {
      return { success: false, error: 'User not found' }
    }

    return { success: true, user: data }
  } catch (error) {
    console.error('Error fetching user data:', error)
    return { success: false, error: 'Failed to fetch user data' }
  }
})