/**
 * Feedback Routes
 *
 * Routes for handling feedback submission and retrieval from Supabase.
 */

const express = require('express');
const { supabase } = require('../lib/supabase.js');

const router = express.Router();

/**
 * GET /feedback
 * Display feedback page with recent feedback entries
 */
router.get('/', async (_req, res) => {
  console.info('GET /feedback - Fetching feedback entries');
  
  try {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);
    
    if (error) {
      console.error('Error fetching feedback:', error.message);
      return res.status(500).send(error.message);
    }
    
    console.info(`Successfully fetched ${data?.length || 0} feedback entries`);
    res.render('feedback/index', { feedback: data });
  } catch (err) {
    console.error('Unexpected error in GET /feedback:', err);
    res.status(500).send('An unexpected error occurred');
  }
});

/**
 * POST /feedback
 * Submit new feedback entry
 */
router.post('/', async (req, res) => {
  const { name, message } = req.body;
  
  console.info(`POST /feedback - New feedback submission from: ${name}`);
  
  try {
    const { error } = await supabase
      .from('feedback')
      .insert([{ name, message }]);
    
    if (error) {
      console.error('Error inserting feedback:', error.message);
      return res.status(500).send(error.message);
    }
    
    console.info('Feedback successfully submitted');
    res.redirect('/feedback');
  } catch (err) {
    console.error('Unexpected error in POST /feedback:', err);
    res.status(500).send('An unexpected error occurred');
  }
});

module.exports = router;
