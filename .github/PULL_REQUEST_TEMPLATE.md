# Pull Request

**Title convention:** feat|fix|docs|chore: short summary (e.g., `feat: add server-side form validation`)

---

## 0️⃣ Context
- **Week/Iteration:** <!-- e.g., Week 9 -->
- **Topics covered:** <!-- e.g., Express routing, EJS forms -->
- **Issue / User Story link (if any):** <!-- optional -->

---

## 1️⃣ Summary (what & why)
<!-- 3–6 sentences: What changed? Why now? What problem or feature does this address? -->

---

## 2️⃣ How to Verify (manual steps)
1. `cp .env.example .env` and configure values
2. `npm ci`
3. (If DB changed) `npm run db:migrate && npm run db:seed`
4. `npm run dev`
5. Visit: http://localhost:3000/...
6. Perform: ...
7. Expect: ...

📎 **Attach proof:**
- [ ] Screenshot(s) or 30–60s screen recording showing feature working

---

## 3️⃣ Scope of Changes
- [ ] Routes / Controllers
- [ ] EJS Templates / Views
- [ ] Client-side JS / CSS
- [ ] Database (Migrations / Seeds)
- [ ] Documentation (README / Docs)
- [ ] Other: _______________________

---

## 4️⃣ Quality Checklist

### 🛡 Security & Data
- [ ] SQL is parameterized (no string concatenation)
- [ ] EJS escapes untrusted output (`<%= ... %>`)
- [ ] CSRF token included on all mutating forms
- [ ] Authentication/authorization checks where needed
- [ ] Session cookies have `HttpOnly` and `SameSite=Lax` (and `Secure` if HTTPS)
- [ ] User input validated and sanitized

### ♿ Accessibility & UX
- [ ] All form inputs have `<label>`s
- [ ] Keyboard navigable; visible focus states
- [ ] Semantic HTML (headings, landmarks)
- [ ] Images have alt text
- [ ] Error and empty states handled gracefully

### ⚙️ Reliability & Ops
- [ ] App starts cleanly with `npm run dev`
- [ ] Migrations reversible and re-runnable
- [ ] `.env.example` updated for new vars
- [ ] README updated with setup/verification notes

### 🧹 Code Health
- [ ] Small PR (<300 LOC) or justified in summary
- [ ] Clear commit messages
- [ ] `npm run lint` and `npm run format` pass

---

## 5️⃣ Risks & Rollback
- **Known risks:** <!-- e.g., new query touches auth/session -->
- **Rollback plan:** <!-- e.g., revert commit SHA; reset DB -->

---

## 6️⃣ Driver / Navigator & AI Assist Disclosure
- **Driver:** <!-- name -->
- **Navigator:** <!-- name or “solo” -->
- **AI Assist used:** Tools/prompts + what you kept or changed (1–2 sentences)

---

## 7️⃣ Reviewer Request
- **Assigned reviewer team:** <!-- e.g., Group 2 reviews Group 3 -->
- **Teams message posted:** [link] <!-- confirm cross-team communication -->
