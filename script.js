function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tab-content" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="nav-link" and remove the class "active"
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // If opening the "My Projects" tab, load the project previews
  if (tabName === 'projects') {
    loadProjectPreviews();
  }
}

// This is a mock function. In a real scenario, you would fetch this data from a server or file system.
function loadProjectPreviews() {
  var projectsContainer = document.getElementById('project-previews');
  projectsContainer.innerHTML = ''; // Clear out any existing content

  // An example of what project data might look like
  var projects = [
    {
      title: 'Project 1',
      date: '2022-01-01',
      author: 'Author Name',
      previewImage: 'Projects/Project 1/preview.png',
      previewText: 'This is a short preview of Project 1...',
      link: 'Projects/Project 1/project1.html' // Path to the project's HTML file
    },
    // Add more projects as needed
  ];

  // Loop through the projects and create the HTML for each preview
  projects.forEach(function(project) {
    var projectHTML = `
    <a href="${project.link}" class="project-preview-block">
      <img src="${project.previewImage}" alt="Preview of ${project.title}">
      <div class="project-preview-content">
        <h3>${project.title}</h3>
        <p>${project.date} by ${project.author}</p>
        <p>${project.previewText}</p>
      </div>
    </a>
    `;
    projectsContainer.innerHTML += projectHTML;
  });
}
// function loadProjectPreviews() {
//   var projectsContainer = document.getElementById('project-previews');
//   projectsContainer.innerHTML = ''; // Clear out any existing content

//   var projects = [
//     'Projects/Project 1/project1.html',
//     // ... other project files
//   ];

//   projects.forEach(function(projectFile) {
//     // Hypothetically fetch the HTML file content
//     fetch(projectFile).then(function(response) {
//       return response.text();
//     }).then(function(html) {
//       // This would need to parse the HTML string to find the relevant data
//       var parser = new DOMParser();
//       var doc = parser.parseFromString(html, 'text/html');
      
//       var title = doc.querySelector('meta[name="project-title"]').content;
//       var date = doc.querySelector('meta[name="project-date"]').content;
//       var author = doc.querySelector('meta[name="project-author"]').content;
//       var previewImage = doc.querySelector('.project-preview').src;
//       var content = doc.querySelector('.project-content').innerText;
//       var previewText = content.substring(0, 100) + '...';
      
//       // Create the HTML for the project preview
//       var projectHTML = `
//         <a href="${projectFile}" class="project-preview-block">
//           <img src="${previewImage}" alt="Preview of ${title}">
//           <div class="project-preview-content">
//             <h3>${title}</h3>
//             <p>${date} by ${author}</p>
//             <p>${previewText}</p>
//           </div>
//         </a>
//       `;
//       projectsContainer.innerHTML += projectHTML;
//     });
//   });
// }


// Open the first tab by default once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Trigger a click on the first nav-link to open the first tab
  var firstNavLink = document.querySelector('.nav-link');
  if (firstNavLink) {
    firstNavLink.click();
  }
});