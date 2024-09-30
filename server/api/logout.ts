import { createClient } from '@supabase/supabase-js'
import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig()
  
  // Initialize Supabase client
  const supabase = createClient(
    config.supabaseUrl,
    config.supabaseServiceRoleKey
  )

  try {
    // Sign out the user from Supabase
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw error
    }

    // Clear any session cookies
    setCookie(event, 'session', '', {
      maxAge: 0,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })

    return {
      success: true,
      message: 'User logged out successfully'
    }
  } catch (error) {
    console.error('Logout error:', error)
    
    return {
      success: false,
      error: 'Failed to log out user'
    }
  }
})
