$(function() {
    var data = [
        {
            id: 1,
            title: 'Time',
            body: 'Time you enjoy wasting, was not wasted.',
            author: 'John Lennon'
        },
        {
            id: 2,
            title: 'Pain',
            body: 'If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. And it is in your power to wipe out this judgment now.',
            author: 'Marcus Aurelius'
        },
        {
            id: 3,
            title: 'Words',
            body: 'Some people just have a way with words, and other people ... oh ... not have way.',
            author: 'Steve Martin'
        },
        {
            id: 4,
            title: 'Peace',
            body: 'If everyone demanded peace instead of another television set, then there\'d be peace.',
            author: 'John Lennon'
        },
        {
            id: 5,
            title: 'Art',
            body: 'Art is the impoing of a pattern on experience, and our aesthetic enjoyment is recognition of the pattern.',
            author: 'Alfred North Whitehead'
        }
    ];
    var dataLength = data.length;
    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function addData(title, body, author) {
        var dataMember = {};
        var listItem;
        dataMember.id = ++dataLength;
        dataMember.title = title;
        dataMember.body = body;
        dataMember.author = author;

        data.push(dataMember);
        listItem = createPost(dataMember);
        showPost(listItem);
    }

    function initPosts() {
        for (let i = 0; i < data.length; i++) {
            createPost(data[i]);
        }
        $posts.children('.post').hide();
        $intro.fadeIn(1000);
    }

    function showPost(el) {
        var id = $(el).attr('id');
        $posts.children().hide();
        $posts.find('#post-' + id).fadeIn();

    }
    function createPost(postData) {
        var postId = 'post-' + postData.id,
            $post = $('<section class="post"></section'),
            $title = $('<h2 class="title"></h2>'),
            $body = $('<blockquote></blockquote>'),
            $author = $('<span class="author"></span>'),
            $navItem = $('<li></li>');

        $title.text(postData.title);
        $body.text(postData.body);
        $author.text(postData.author);

        $navItem.attr('id', postData.id);
        $navItem.text(postData.title);

        $post.attr('id', postId);
        $post.append($title);
        $post.append($body);
        $post.append($author);

        $posts.append($post);
        $nav.append($navItem);

        $navItem.on('click', function() {
            showPost(this);
        });

        return $navItem;
    }
    function get(element) {
        return document.getElementById(element);
    }

    function openModal() {
        var modal = get('modal-dialog');
        var backdrop = get('modal-backdrop');

        modal.classList.add('visible');
        backdrop.classList.add('visible');
    }

    function closeModal() {
        var title = get('edit-title-text');
        var text = get('edit-content-text');
        var author = get('edit-author-text');
        var modal = get('modal-dialog');
        var backdrop = get('modal-backdrop');

        title.value = '';
        text.value = '';
        author.value = '';


        modal.classList.remove('visible');
        backdrop.classList.remove('visible');
    }

    function saveContent() {
        var title = get('edit-title-text');
        var text = get('edit-content-text');
        var author = get('edit-author-text');

        addData(title.value, text.value, author.value);

        closeModal();
    }
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);

    initPosts();
});
