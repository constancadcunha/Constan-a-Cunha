document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");

      if (href.startsWith('http') || anchor.hasAttribute('download')) {
        return;
      }

      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Experience Content Switcher
const experienceData = {
  internship: `<h3>Front-End Developer Apprentice</h3>
                <p>Sky Portugal- Internship (2024)</p>
                <ul>
                    <li><strong>Spearheaded</strong> the development of a <strong>critical</strong> internal web application for STB (Set-Top Box) device monitoring and diagnostics, utilizing <strong>HTML</strong>, <strong>vanilla JavaScript</strong>, and <strong>CSS</strong>.</li>
                    <li>Built a <strong>user-friendly</strong> interface that <strong>streamlined</strong> internal workflows and <strong>enhanced</strong> team efficiency in device monitoring and support operations.</li>
                    <li>Demonstrated <strong>initiative</strong> by implementing <strong>additional features</strong> beyond initial requirements, including <strong>API support testing</strong> functionality and <strong>data export</strong> capabilities.</li>
                    <li>Created an <strong>intuitive</strong> system for accessing and analyzing device information, facilitating <strong>data-driven decision-making</strong> across internal teams.</li>
                    <li>Successfully delivered a <strong>complete</strong>, <strong>production-ready</strong> solution that <strong>significantly improved</strong> the efficiency of device monitoring and support processes.</li>
                </ul>`,

  student: `<div class="student-orgs-container">
                <div class="student-org">
                    <h3>Coordinator SINFO</h3>
                    <p>IST Technology Conference (2022-Present)</p>
                    <ul>
                        <li><strong>Core member</strong> of <strong>SINFO</strong> - Portugal's largest free technology conference, connecting <strong>85+</strong> leading companies with local tech talent and featuring <strong>15+</strong> influential speakers from global IT corporations annually.</li>
                        <li>Created <strong>30+</strong> distinctive <strong>marketing materials</strong>, with two designs becoming <strong>top-performing posts</strong> on SINFO's Instagram profile, driving exceptional audience engagement.</li>
                        <li>Currently serve on the <strong>Coordination Team</strong>, overseeing multiple specialized teams and ensuring cohesive execution of conference initiatives.</li>
                        <li>Led the <strong>creative direction</strong> for SINFO 31's recruitment campaign, developing compelling materials that successfully attracted qualified team members and enhanced the event's visibility.</li>
                    </ul>
                </div>
                <div class="student-org">
                    <h3>Human Resources Coordinator</h3>
                    <p>Diferencial (2021 - 2023)</p>
                    <ul>
                        <li>Rapidly advanced from <strong>journalist</strong> to <strong>Head of Human Resources</strong> at <strong>Diferencial</strong>, Instituto Superior Técnico's student newspaper and cultural events organization.</li>
                        <li>Successfully led <strong>recruitment campaigns</strong> that brought in <strong>56 new members</strong>, significantly expanding and diversifying our contributor base.</li>
                        <li>Developed and implemented engaging <strong>team-building initiatives</strong> that boosted team satisfaction by <strong>65%</strong>, strengthening organizational culture and member retention.</li>
                        <li>Managed comprehensive <strong>HR responsibilities</strong> including member administration, team coordination, and organizational development.</li>
                    </ul>
                </div>
              </div>`,
  tutoring: `<div class="student-orgs-container">
                <div class="student-org">
                    <h3>Mathematics and Physics Tutor</h3>
                    <p>Private Tutoring (2020-2022)</p>
                    <ul>
                        <li>Provided <strong>one-on-one tutoring</strong> in <strong>physics and mathematics</strong> to a middle school student, developing <strong>personalized learning strategies</strong> to address his unique needs.</li>
                        <li>Simplified complex concepts through <strong>real-world examples</strong> and <strong>interactive teaching methods</strong>, resulting in <strong>improved academic performance</strong> and increased confidence in <strong>STEM subjects</strong>.</li>
                        <li>Demonstrated <strong>patience and adaptability</strong> in adjusting teaching approaches to maintain student engagement and ensure comprehensive understanding of fundamental concepts.</li>
                    </ul>
                </div>
                <div class="student-org">
                    <h3>Ballet Teacher Assistant</h3>
                    <p>Dance Academy (2015-2019)</p>
                    <ul>
                        <li>Assisted in teaching <strong>ballet classes</strong> while demonstrating strong <strong>leadership and mentoring</strong> abilities.</li>
                        <li>Supported lead instructor in <strong>class management</strong>, <strong>technique demonstration</strong>, and <strong>individual student guidance</strong>.</li>
                        <li>Helped develop young dancers' skills through <strong>clear communication</strong> and <strong>positive reinforcement</strong>, while ensuring proper form and safety.</li>
                        <li>Contributed to <strong>choreography planning</strong> and <strong>recital preparations</strong>, showcasing organizational skills and attention to detail.</li>
                    </ul>
                </div>
            </div>`,
  volunteering: `<div class="student-orgs-container">
                    <div class="student-org">
                        <h3>Volunteer</h3>
                        <p>ReFood (2016-2020)</p>
                        <ul>
                            <li>Contributed to <strong>ReFood's mission</strong> of <strong>reducing food waste</strong> and <strong>fighting hunger</strong> by collecting and redistributing surplus food from local restaurants and businesses.</li>
                            <li>Assisted in <strong>sorting and organizing</strong> food donations for timely <strong>distribution</strong> to families and individuals in need.</li>
                            <li>Collaborated with a dedicated <strong>team of volunteers</strong> to maintain consistent service and support for community members.</li>
                        </ul>
                    </div>
                    <div class="student-org">
                        <h3>Volunteer</h3>
                        <p>Banco Alimentar (2012-2020)</p>
                        <ul>
                            <li>Engaged in <strong>long-term volunteer service</strong> with <strong>Portugal's largest food bank organization</strong>, demonstrating sustained commitment to addressing <strong>food insecurity</strong>.</li>
                            <li>Participated in <strong>national food collection campaigns</strong> at supermarkets, helping to organize and motivate <strong>community donations</strong>.</li>
                            <li>Supported the organization's mission of providing <strong>essential nutrition</strong> to <strong>thousands of families</strong> across Portugal.</li>
                        </ul>
                    </div>
                </div>`,
};

// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check for previously saved user preference
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️"; // Change to sun icon for switching back
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggleButton.textContent = "☀️"; // Sun icon
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleButton.textContent = "🌙"; // Moon icon
    }
  });
});

function showExperience(type) {
  const content = document.getElementById("experience-content");

  // Fade out the content before updating
  content.style.opacity = 0;
  setTimeout(() => {
    content.innerHTML = experienceData[type];

    // Fade in the content after updating
    content.style.opacity = 1;

    // Update active button state
    document.querySelectorAll(".experience-tabs button").forEach((button) => {
      button.classList.remove("active");
      if (button.getAttribute("data-type") === type) {
        button.classList.add("active");
      }
    });
  }, 300); // Adjust this duration to match the CSS transition time
}

// Initialize experience tabs and default content
document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.querySelector(".experience-tabs");
  tabsContainer.innerHTML = `
        <button data-type="internship" class="active">Internship</button>
        <button data-type="student">Student Organizations</button>
        <button data-type="tutoring">Tutoring</button>
        <button data-type="volunteering">Volunteering</button>
    `;

  document.querySelectorAll(".experience-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      showExperience(button.getAttribute("data-type"));
    });
  });

  showExperience("internship");
});
