---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div style="max-width:580px; margin: 2em auto;">
  <p style="font-size:1.1em; margin-bottom:0.4em;"><strong>CV available upon request</strong></p>
  <p style="color:#555; margin-bottom:1.5em;">Fill in the form below and I will get back to you promptly.</p>

  <form action="https://formspree.io/f/mrpbbdod" method="POST" style="display:flex; flex-direction:column; gap:14px;">

    <div style="display:flex; flex-direction:column; gap:4px;">
      <label style="font-weight:600; font-size:0.9em;">Name</label>
      <input type="text" name="name" required placeholder="Your name"
        style="padding:10px 12px; border:1px solid #d1d5db; border-radius:6px; font-size:0.95em;">
    </div>

    <div style="display:flex; flex-direction:column; gap:4px;">
      <label style="font-weight:600; font-size:0.9em;">Email</label>
      <input type="email" name="email" required placeholder="your@email.com"
        style="padding:10px 12px; border:1px solid #d1d5db; border-radius:6px; font-size:0.95em;">
    </div>

    <div style="display:flex; flex-direction:column; gap:4px;">
      <label style="font-weight:600; font-size:0.9em;">Affiliation</label>
      <input type="text" name="affiliation" placeholder="University / Company (optional)"
        style="padding:10px 12px; border:1px solid #d1d5db; border-radius:6px; font-size:0.95em;">
    </div>

    <div style="display:flex; flex-direction:column; gap:4px;">
      <label style="font-weight:600; font-size:0.9em;">Message</label>
      <textarea name="message" required rows="4" placeholder="Why are you requesting the CV?"
        style="padding:10px 12px; border:1px solid #d1d5db; border-radius:6px; font-size:0.95em; resize:vertical;"></textarea>
    </div>

    <input type="hidden" name="subject" value="CV Request">

    <button type="submit"
      style="padding:11px 28px; background:#7c3aed; color:#fff; border:none; border-radius:6px; font-size:1em; font-weight:bold; cursor:pointer; align-self:flex-start;">
      Send Request
    </button>

  </form>
</div>
