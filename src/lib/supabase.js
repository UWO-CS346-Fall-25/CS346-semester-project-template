/**
 * Supabase Client Configuration
 *
 * This file initializes the Supabase client using environment variables.
 */

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Warning: Supabase credentials not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env file.');
}

const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

module.exports = { supabase };
