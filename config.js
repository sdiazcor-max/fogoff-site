/**
 * FOG OFF — Configuration File
 * ================================
 * All API keys, tokens, links, and contact info live here.
 * Never paste keys directly into index.html.
 * To update a key or link: edit this file only.
 *
 * Last updated: June 2026
 */

const FOGOFF_CONFIG = {

  // ── API KEYS ──────────────────────────────────────────
  googleMapsKey: 'AIzaSyDnDhUKqbgONKUFbBi-t429bLIeKjpROD4',  // console.cloud.google.com
  web3formsKey:  '5281736b-9f0f-49fe-8c70-d6d78c0cc8a0', // web3forms.com → Form Setup

  // ── STRIPE PAYMENT LINKS ──────────────────────────────
  stripe: {
    starterFog: 'https://buy.stripe.com/cNiaEW9zPctq14M3pz9IQ00', // $69/mo
    fullSend:   'https://buy.stripe.com/8x24gy13jalieVC6BL9IQ01', // $119/mo
    fogBoss:    'https://buy.stripe.com/6oU4gy27ngJGcNu1hr9IQ02', // $179/mo
    oneTime:    'https://buy.stripe.com/9B66oGeU9bpm3cU0dn9IQ03', // $89
    eventFog:   'https://buy.stripe.com/9B6cN4fYdali28Qgcl9IQ04', // $149-299
  },

  // ── CONTACT ───────────────────────────────────────────
  phone:        '704-997-3336',
  phoneE164:    '+17049973336',
  phoneSMS:     '7049973336',
  email:        'hello@fogoff.net',
  website:      'https://fogoff.net',

  // ── AUTOMATION ────────────────────────────────────────
  n8nWebhook: 'https://hellofogoff.app.n8n.cloud/webhook/3fd3e1ca-aea3-4555-ac7d-3b44a42249cd',

  // ── SERVICE AREA ──────────────────────────────────────
  serviceZip:   '28205',
  serviceCity:  'Charlotte',
  serviceState: 'NC',

  // ── ANALYTICS ─────────────────────────────────────────
  // Uncomment each line and add your ID when ready to activate
  // Step 1: Get GTM container ID from tagmanager.google.com
  // Step 2: Get Meta Pixel ID from business.facebook.com → Events Manager
  // Step 3: Get GA4 ID from analytics.google.com → Admin → Data Streams
  analytics: {
    gtmId:    null, // 'GTM-XXXXXXX'
    metaPixel: null, // 'YOUR_PIXEL_ID'
    ga4Id:    null, // 'G-XXXXXXXXXX'
  },

};
