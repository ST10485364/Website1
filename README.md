# NextGen
# Temogo Esitang 
# ST10485364
# Github Link
https://github.com/ST10485364/Website1.git)

# Goals
1.	Increase brand awareness
2.	Establish a strong online presence
3.	Deliver reliable and high-quality solutions and services which will exceed the clients' expectations
4.	Provide a platform for the customers so they can purchase our services that will help them have a and working              electricity. 
5.	Educate everyone about the safety of working electricity

# key features
1. Homepage: this would be the introduction to NextGen electricity, the mission statement.
2. About Us page: the description of the company as well as its history, team profiles and contact information.
3. Products/Services page: This will showcase the eco-friendly products, recycling programs and workshops.
4. E-commerce functionality: Online store so people can purchase the eco-friendly.
5. Workshop registration: Online registration system for workshops and events.

# Timeline and milestones
1. Project initiation: Week 1-2 (August 18-31)
2. Research and planning: Week 3-4 (September 1-14)
3. Design and development: Week 5-8 (September 15-October 12)
4. Testing and launch: Week 9-10 (October 13-26)

# Changelog
I managed to make the images display when running the website.
I fixed the navigation system to work when going from the contact page to the homepage.


# Wireframes
<img width="263" height="361" alt="Screenshot 2026-08-12 203027" src="https://github.com/user-attachments/assets/22d81d40-8824-485c-84df-c786cad8e316" />
<img width="265" height="366" alt="Screenshot 2026-08-12 203505" src="https://github.com/user-attachments/assets/b33907ed-8475-45cb-be13-2e92aed5fe56" />
<img width="271" height="362" alt="Screenshot 2026-08-12 203659" src="https://github.com/user-attachments/assets/6fd96cbd-fd2e-4be4-8ea6-00692a4f56c3" />
<img width="262" height="356" alt="Screenshot 2026-08-12 203815" src="https://github.com/user-attachments/assets/8a462088-b081-494c-ba45-d95678751a09" />
<img width="268" height="373" alt="Screenshot 2026-08-12 203908" src="https://github.com/user-attachments/assets/901e2bab-bbf3-4dd1-ae66-f05092975032" />
<img width="257" height="361" alt="Screenshot 2026-08-12 204336" src="https://github.com/user-attachments/assets/f5b2c5fc-a13e-4002-a116-1a925b138489" />

# Sitemap
<img width="1024" height="768" alt="Pastel Pink and Peach Gradient Creative Agency Graph " src="https://github.com/user-attachments/assets/8c1f29b8-9f2a-4e89-a849-74baf5f53866" />

# Screenshots
<img width="919" height="381" alt="Screenshot 2026-09-18 073732" src="https://github.com/user-attachments/assets/4cc5ec8f-3c93-4c95-a1a5-c0411c5bfe0a" />
<img width="929" height="437" alt="Screenshot 2026-09-18 073809" src="https://github.com/user-attachments/assets/2d3ae573-cc4d-4eea-bc91-c8b9fe3ae858" />
<img width="933" height="287" alt="Screenshot 2026-09-18 073832" src="https://github.com/user-attachments/assets/4139f065-17a7-4562-b3f2-2ad728130864" />
<img width="328" height="382" alt="image" src="https://github.com/user-attachments/assets/27ca2400-85e1-4bd4-846e-cfd278f0084f" />
<img width="187" height="367" alt="image" src="https://github.com/user-attachments/assets/ed4cc976-ceb9-4845-873e-cfd316df9ba7" />

# Changelog
This documents all changes made based on Lecturer Feedback and self-found bugs.
#### 1. Critical Fix - CSS Folder Not Loading Online
Problem: HTML referenced `../css/stylesheet.css` but actual folder was `CSS/` (uppercase). Linux hosting is case-sensitive, so site showed without styling.
File: All 5 HTML files + folder structure
Change: Renamed folder `CSS/` to `css/` (lowercase). Updated all links to `../css/stylesheet.css`.
Result: Styling now loads online.

#### 2. CSS Merge Conflict Removal
Problem: README says "Remove leftover HEAD merge-conflict text from CSS"
File: `css/stylesheet.css`
Change: Deleted lines `<<<<<<< HEAD`, `=======`, `>>>>>>> main` from CSS file.
Result: Clean CSS file with no git errors.

#### 3. Fixed Broken `file:///C:/` Link in contact.html
Problem: Feedback: "replace the local file:///C:/ link in contact.html"
File: `contact.html`
Before:`<a href="file:///C:/Users/Dr%20...">`
After:	`<a href="homepage.html">Homepage</a>` (project-relative path)
Result: No local file paths, all links work online.

#### 4. Fixed Hero Image Overlap - "Fast and Reliable Electrical Services"
Problem: Hero text overlapped paragraph on iPad Mini (768px) and iPhone 16 Pro Max (440px).
File:`css/stylesheet.css
Before: `.Hero-text { position: absolute; } .Hero-image { height: 200px; }`
After: `.Hero-image { display: flex; min-height: 250px; } .Hero-text { position: static; }`
Result: Hero text stays inside grey box on all breakpoints, no overlap.

#### 5. Fixed Missing Message Box - "Nothing to type by the message"
Problem: Contact page screenshot shows Message label but no input area.
File: `css/stylesheet.css`
Before:`#message, #message2 { display: none; } img { max-width: 50%; height: 50%; }`
After:`#message, #message2 { display: block !important; min-height: 130px; background: white; } img { max-width: 100%; }`
Change Also: `contact.html` - changed `<textarea rows="2">` to `rows="6"` and added `placeholder="Type your message here..."`, removed invalid `<br></br>` tags.
Result: Message textarea is now visible and usable.

#### 6. Fixed Navigation - Inline Styles + Mobile Cut Off at 375px
Problem: Feedback: "Move inline navigation styles into external stylesheet and ensure navigation adapts on mobile, currently cut off at 375px"
File: All 5 HTML files + `css/stylesheet.css`
Before: `<ul style="list-style: none; display: flex; gap: 25px;">`
After: `<ul>` (no inline style) + CSS handles it:
header nav ul { list-style: none; display: flex; gap: 25px; }
@media (max-width: 600px) { header { flex-direction: column; } header nav ul { flex-wrap: wrap; justify-content: center; } }
Result: No inline styles, nav wraps and is readable on 375px width.

#### 7. Fixed Button Hover Selector
Problem: Feedback: "button :hover selector should be corrected by removing unnecessary space"
File:`css/stylesheet.css`
Before: `button :hover { ... }` (with space = child element)
After: `button:hover { ... }` (no space)
Result: Hover effect now works correctly.

#### 8. Fixed Text Alignment - Left Align Contact and Services
User Request: "left align the text under contact us" and "left align not right aligned"
File: `css/stylesheet.css`
Before: `p { text-align: center; } h2, h3 { text-align: center; }`
After: `p { text-align: left; padding: 0 20px; } h2, h3 { text-align: left; } .contact, .trading-hours, .contact-form { text-align: left; }`
Result: Contact page and Trading Hours are left aligned as requested.

#### 9. Fixed Broken Image Paths and Hero Image URL
Problem:`"Several image paths and hero image URL are also broken"
File: All HTML + CSS
Before: `../Images/` and `background-image: url(broken link)`
After: `../images/` (lowercase) and `.Hero-image { background-color: #e8e8e8; background-image: none; }`
Result: All images load correctly.

#### 10. Fixed References - Bing Redirect URLs to Harvard
Problem: "Your current references use Bing redirect URLs, replace with properly formatted Harvard references"
File: `README.md`
Before: `https://www.bing.com/ck/a?!&&p=09550fe68d96237...&u=a1aHR0cHM6...`
After: Decoded and formatted:
`Voltstone (2024) Difference between licensed and unlicensed electricians. Available at: https://www.voltstone.co.za/difference-between-licensed-unlicensed-electricians/ (Accessed: 27 October 2026).`
Result: 8 references now in proper Harvard format, no Bing tracking links.

#### 11. Logo Missing from Header (Added Back)
Problem: User removed logo during edits.
File: All HTML files
Change: Added back:
<div class="logo"><img src="../images/NextGen Electronics Logo.png" alt="NextGen Logo"></div>
Result: Logo visible beside navigation on all pages.

#### 12. Fixed Contact Form Email Bug
File: `contact.html` and `services.html`
Before: `body =[ 'Name:${name}' ]` (single quotes, won't interpolate)
After: `` body = `Name: ${name}\nEmail: ${email}` `` (template literals)
Result: Email composition now shows actual user data.

Summary: Total 12 major fixes covering Part 2 requirements: Responsive design (375px, 768px, 1024px), external CSS, valid Harvard referencing, working forms, and mobile navigation.
	
# References
Voltstone (2024) Difference between licensed and unlicensed electricians. Available at: https://www.voltstone.co.za/difference-between-licensed-unlicensed-electricians/ (Accessed: 27 October 2026).RSB Electrical Inc. (2024) The role and importance of a licensed electrician. Available at: https://www.rsbelectricalinc.com/blog/the-role-and-importance-of-a-licensed-electrician (Accessed: 27 October 2026).Palmer Electric (2024) The difference between commercial, industrial and residential electricians. Available at: https://www.palmer-electric.com/electrician-orlando-florida/the-difference-between-commercial-industrial-residential-electricians/ (Accessed: 27 October 2026).Status.net (2023) Best company slogans, vision and mission statements examples. Available at: https://status.net/articles/best-company-slogans-vision-mission-statements-examples/ (Accessed: 27 October 2026).RocketReach (2024) Terminal Andrae profile. Available at: https://rocketreach.co/terminal-andrae-profile_b5deb304f42e4e85 (Accessed: 27 October 2026).Lucidity (2023) Strategy resources: Company vision statement examples. Available at: https://getlucidity.com/strategy-resources/category/examples/ (Accessed: 27 October 2026).Franking, H. (2023) What are the objectives of an electrical company? Available at: https://franking.home.blog/2023/10/24/what-are-the-objectives-of-an-electrical-company/ (Accessed: 27 October 2026).Shockproof Business (2024) Essential components of an electrical business plan guide. Available at: https://www.shockproofbusiness.com/articles/essential-components-electrical-business-plan-guide/ (Accessed: 27 October 2026).
Pexels (2024) Electrician working on electrical panel. Available at: https://www.pexels.com/search/electrician/ (Accessed: 27 October 2026).
