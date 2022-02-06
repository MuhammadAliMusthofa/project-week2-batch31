let blogs = [];

// let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];

function addBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById('input-blog-project').value;
  let startDate = document.getElementById('input-blog-start').value;
  let endDate = document.getElementById('input-blog-end').value;
  let description = document.getElementById('input-blog-description').value;
  let skillNodeJs = document.getElementById('nodejs').checked;
  let skillReactJs = document.getElementById('reactjs').checked;
  let skillNextJs = document.getElementById('nextjs').checked;
  let skillTypeScript = document.getElementById('typescript').checked;

  //kondisi checkbox untuk mengambil valuenya
  //jika dicekslit akan menampilkan value
  if (skillNodeJs) {
    skillNodeJs = document.getElementById('nodejs').value;
  } else {
    //==> jika tidak dichecklist akan menampilkan string kosong
    skillNodeJs = '';
  }

  if (skillReactJs) {
    skillReactJs = document.getElementById('reactjs').value;
  } else {
    skillReactJs = '';
  }

  if (skillNextJs) {
    skillNextJs = document.getElementById('nextjs').value;
  } else {
    skillNextJs = '';
  }

  if (skillTypeScript) {
    skillTypeScript = document.getElementById('typescript').value;
  } else {
    skillTypeScript = '';
  }

  let image = document.getElementById('input-blog-image');

  image = URL.createObjectURL(image.files[0]);

  let differenceTime = new Date(endDate) - new Date(startDate);
  let differenceDay = Math.floor(differenceTime / (1000 * 3600 * 23));
  let differenceMonth = Math.floor(differenceDay / 30);

  let blog = {
    differenceTime,
    differenceDay,
    differenceMonth,
    projectName,
    startDate,
    endDate,
    description,
    skillNodeJs,
    skillReactJs,
    skillNextJs,
    skillTypeScript,
    image,
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  let blogContainer = document.getElementById('contents-blogs');

  blogContainer.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    blogContainer.innerHTML += `
    <div style="box-sizing:border-box" class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
        
            <h1>
              <a href="blog-project-detail.html" target="_blank">${blogs[i].projectName}</a>
            </h1>
            <p> duration: </P>
            <div style="color:grey" class="detail-blog-content">${blogs[i].differenceMonth} month </div>
            <p>
              ${blogs[i].description}
            </p>

            <p>
            My Skills Technologies:<br>
            ${blogs[i].skillNodeJs}  ${blogs[i].skillReactJs}  ${blogs[i].skillNextJs}  ${blogs[i].skillTypeScript}
            </p>

            <div style="text-align: right">
              <span style="font-size: 15px; color: grey"></span>
            </div>

            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
          </div>
        </div>`;
  }

  function firstBlogContent() {
    return `<div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/reactjs.jpeg" alt="" />
    </div>
    <div class="blog-content">
      <h1>
        <a href="blog-project-detail.html" target="_blank">Web Development Is Very Good Job For Any Years</a>
      </h1>
      <div class="detail-blog-content">5 Februari 2022 10:30 WIB | Muhammad Ali Musthofa</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident magni ea dignissimos! Culpa ipsam quaerat nobis ratione? Dolores similique nostrum ab molestias corrupti inventore eaque necessitatibus atque debitis quis
        laboriosam sed dolorem voluptates eum numquam perferendis doloremque hic, totam sint ipsam? Perferendis architecto optio dolorem vel ea laudantium sint beatae hic reprehenderit fugiat iure velit odit sunt voluptatum, ipsum
        pariatur! Impedit accusamus vero explicabo, harum esse laborum amet nesciunt inventore!
      </p>

      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
    </div>
  </div>`;
  }
}
