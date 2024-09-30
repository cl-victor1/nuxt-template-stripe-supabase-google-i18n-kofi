import { createClient } from '@supabase/supabase-js'
import { defineEventHandler, readBody } from 'h3'

const config = useRuntimeConfig()
const supabaseUrl = config.supabaseUrl
const supabaseKey = config.supabaseServiceRoleKey
const supabase = createClient(supabaseUrl, supabaseKey)

export default defineEventHandler(async (event) => {
  const { userId, credits } = await readBody(event)

  if (!userId || credits === undefined) {
    return { success: false, error: 'Invalid input' }
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .update({ credits: credits })
      .eq('id', userId)
      .select()

    if (error) throw error
    if (!data || data.length === 0) {
      return { success: false, error: 'User not found' }
    }

    return { success: true, user: data[0] }
  } catch (error) {
    console.error('Error updating user credits:', error)
    return { success: false, error: 'Failed to update user credits' }
  }
})