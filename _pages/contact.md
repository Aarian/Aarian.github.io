---
layout: archive
title: "Contact"
permalink: /contact/
author_profile: true
---

<link rel="stylesheet" href="{{ '/assets/css/mylib.css' | relative_url }}">

<div style="max-width:580px; margin: 2em auto;">
  <p style="color:#555; margin-bottom:1.5em;">Feel free to send me a message — whether it's about my research, a collaboration idea, or a CV request.</p>

  <form action="https://formspree.io/f/mrpbbdod" method="POST" style="display:flex; flex-direction:column; gap:14px;">

    <div style="display:flex; flex-direction:column; gap:4px;">
      <label style="font-weight:600; font-size:0.9em;">Name</label>
      <input type="text" name="name" required placeholder="Your name"
        style="padding:10px 12px; border:1px solid #d1d5db; border-radius:6px; font-size:0.95em; outline:none;">
    </div>

    <div style="display:flex; flex-direction:column; gap:4px;">
      <label style="font-weight:600; font-size:0.9em;">Email</label>
      <input type="email" name="email" required placeholder="your@email.com"
        style="padding:10px 12px; border:1px solid #d1d5db; border-radius:6px; font-size:0.95em; outline:none;">
    </div>

    <div style="display:flex; flex-direction:column; gap:4px;">
      <label style="font-weight:600; font-size:0.9em;">Affiliation</label>
      <input type="text" name="affiliation" placeholder="University / Company (optional)"
        style="padding:10px 12px; border:1px solid #d1d5db; border-radius:6px; font-size:0.95em; outline:none;">
    </div>

    <div style="display:flex; flex-direction:column; gap:4px;">
      <label style="font-weight:600; font-size:0.9em;">Subject</label>
      <select name="subject" style="padding:10px 12px; border:1px solid #d1d5db; border-radius:6px; font-size:0.95em; background:#fff; outline:none;">
        <option value="General Message">General Message</option>
        <option value="CV Request">CV Request</option>
        <option value="Research Inquiry">Research Inquiry</option>
        <option value="Collaboration">Collaboration</option>
      </select>
    </div>

    <div style="display:flex; flex-direction:column; gap:4px;">
      <label style="font-weight:600; font-size:0.9em;">Message</label>
      <textarea name="message" required rows="5" placeholder="Your message..."
        style="padding:10px 12px; border:1px solid #d1d5db; border-radius:6px; font-size:0.95em; resize:vertical; outline:none;"></textarea>
    </div>

    <button type="submit"
      style="padding:11px 28px; background:#7c3aed; color:#fff; border:none; border-radius:6px; font-size:1em; font-weight:bold; cursor:pointer; align-self:flex-start;">
      Send Message
    </button>

  </form>
</div>
