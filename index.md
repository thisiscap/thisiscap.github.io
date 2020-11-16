---
# Homepage template

# layout: default
title: Hello
# permalink: /title/
# metaDescription: Use this description
# metaSocialImage: filename.jpg
---

<!-- <header>
    <h1>{{ page.title }}</h1>
</header> -->

<main id="content">

    <section class="content content-intro">
        <div class="editorial">
            <h1>{{ page.title }}</h1>
            <p>So you’ve found yourself on my website, welcome&excl;</p>
            <p>As a graphic designer I work with people to craft the context, purpose and design of their narratives.
            </p>
            <p>Some of these people have been Alzheimer&apos;s Society, Barrow Cadbury, Hunt
                Wheels, ITV, OOFOS, National Housing Federation and Universal Music.</p>
        </div>
    </section>

    <section class="content content-gallery">
        {% comment %} Swiper JS gallery {% endcomment %}
        <div class="swiper-container">
            <div class="swiper-wrapper">
                {% for image in site.data.images %}
                <figure class="swiper-slide" {% if image.imageDelay %}data-swiper-autoplay="{{ image.imageDelay }}"
                    {% endif %}>
                    <img src="{{ image.imageSrc }}" loading="{% if forloop.first %}eager{% else %}lazy{% endif %}"
                        alt="{{ image.imageAlt }}.">
                </figure>
                {% endfor %}
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <section class="content content-outro">
        <div class="editorial">
            <p>Interested in knowing more? Get in touch at <a href="mailto:hi@chrisporter.uk" target="_blank"
                    rel="noopener noreferrer">hi@chrisporter.uk</a>.</p>
            <p>You can also find me on <a href="https://">LinkedIn</a> & <a href="#">Are.na</a>.</p>
            <footer>
                <small>&copy; 2013 - {{ site.time | date: "%Y" }} Chris Porter</small>
                <small>All images &copy; of their respective owners</small>
            </footer>
        </div>
    </section>

</main>
