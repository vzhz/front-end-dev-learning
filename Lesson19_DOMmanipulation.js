//Lesson19_DOMmanipulation.js

/*
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// don't change this variable!
var featuredArticle;

featuredArticle = $('li.article-item').toggleClass('featured');

// alternate
featured = $('.featured');
featured.toggleClass('featured');


/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

article2 = $('li.article-item').toggleClass('featured');
article3 = $('article2').next().toggleClass('featured');

/*
My initial errors
Make sure you call the 'toggleClass' function.
Looks like you aren't using a jQuery selector for at least one of your variables.
The class 'featured'' was present when it shouldn't be.
Expected class of type: featured. Remember, class selectors start with '.'
*/


// alternative
article2 = $('.featured');
article3 = article2.next();
article2.toggleClass('featured');
article3.toggleClass('featured');



/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

/*
<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>
*/

// Start with this variable!
var navList;
// my fucked up partial answer
navList = $("li").attr("class");


// their answer
var navList, firstItem, link;
navList = $('.nav-list');
firstItem = navList.children().first();
link = firstItem.find('a');
link.attr('href', '#1');



//extra
A function passed into the jQuery object runs on document.ready, which occurs after the DOM has been loaded.

Why is this useful?
External JavaScript files in the <head> of a document are generally downloaded earlier than JavaScript files included in the <body>. JavaScript files are also executed immediately at their location in the document, which means they can't access any DOM elements that come after their <script> tag in the DOM. This leads to some interesting situations.

Imagine you're building a website and you've got a script you want to run against some DOM elements in the page. If you include your script in the <head> normally, it will run as soon as it's downloaded, which will occur before the DOM has built the elements you want your script to run against. So your script wouldn't be able to do anything.

You could include your script at the bottom of the <body>, but that would mean that the download could potentially start later in the load process, slowing down the initial page render.

So what can you do?

Pass your function into the jQuery object, like so:

function someFunction() {
    // Do interesting things
}
$(someFunction)
or

$(function(){
    // Do interesting things
})
Now, you can include your script in the <head> and it won't run until the DOM has been built and the elements that you want to manipulate are on the page.

To try this technique out, I've included a zip file of a sample website in the Downloadables section. Click "Continue to Quiz" to try this technique for yourself!

You can download the jQuery-Sample-Site.zip here.

For this quiz, can you use the script that is linked in the of index.html, to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run when the document is ready.

Good luck!

Note: Here are some image URLs you can use:

http://placekitten.com/350/150
http://lorempixel.com/350/150/animals/
Task List






Passing a function (callback) to the jQuery object

In case you were curious, the reason you're downloading the website and running it locally instead of running it in the classroom like before is because of the way the Udacity classroom works.

With the way the <iframe> with your modified site loads in the classroom, $(someFunction)'s behavior is exactly the same as simply calling someFunction() like normal. So there isn't really a reason to ask you to try it here.

So here's my answer:

$(function() {
    $('img').attr('src', 'http://placekitten.it/350/150');
});
I'm simply starting with the jQuery object and passing it an anonymous function.

The anonymous function changes the src of the one img on the page to the URL provided. (Remember, $('img') grabs all of the images on the page, so this is a very bad selector. It works in this case because there's only one <img>, but normally you should use a much more specific selector.)

If I hadn't wrapped my .attr() function in the jQuery object, it would run as soon as it's loaded in the <head> of the document, which occurs before the <img> tag appears on the page. So nothing would happen.

But by wrapping it up in the jQuery object, it runs when the DOM is ready, and I get to see a cute kitten, instead!

Supporting Materials
 jQuery-Sample-Site.zip
NEXT

