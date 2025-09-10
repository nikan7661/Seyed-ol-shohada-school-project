/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: #f7f7f7;
  color: #333;
}

/* Container */
.container {
  width: 90%;
  max-width: 1100px;
  margin: auto;
}

/* Header */
header {
  background: #222;
  color: #fff;
  padding: 1rem 0;
}

header .logo {
  display: inline-block;
  font-size: 1.8rem;
  font-weight: bold;
}

nav {
  float: right;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
  margin-left: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

nav ul li a:hover {
  color: #f39c12;
}

/* Main Layout */
main {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
}

/* Posts */
.posts {
  flex: 3;
}

.post {
  background: white;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.post-title {
  margin-bottom: 0.5rem;
  color: #333;
}

.post-meta {
  color: gray;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.read-more {
  display: inline-block;
  background: #f39c12;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.read-more:hover {
  background: #d35400;
}

/* Sidebar */
.sidebar {
  flex: 1;
  background: white;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.sidebar h3 {
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
}

.sidebar ul li {
  margin-bottom: 0.5rem;
}

.sidebar ul li a {
  color: #333;
  text-decoration: none;
}

.sidebar ul li a:hover {
  color: #f39c12;
}

/* Footer */
footer {
  background: #222;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

/* Responsive */
@media(max-width: 768px) {
  main {
    flex-direction: column;
  }

  nav {
    float: none;
    text-align: center;
    margin-top: 1rem;
  }

  nav ul li {
    display: block;
    margin: 10px 0;
  }
}
