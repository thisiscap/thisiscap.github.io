---
# Homepage template

# layout: default
title: Hello
# permalink: /title/
# metaDescription: Use this description
# metaSocialImage: filename.jpg
---

<main id="content">
    <section class="content content-intro">
        <div class="editorial">
            <h1>{{ page.title }}</h1>
            <p>So you’ve found yourself on my website, welcome! If you don’t already know, my name is Chris. For seven
                years I’ve been working as a graphic designer, helping people communicate meaningfully across print,
                digital and physical space.</p>
            <p>Some of these people have been Alzheimer’s Society, Barrow Cadbury, Hunt Wheels, ITV, OOFOS, the National
                Housing Federation and Universal Music.</p>
        </div>
    </section>

    <section class="content content-gallery">
        {% comment %} Image gallery, powered with Swiper.js {% endcomment %}
        <div class="swiper-container">
            <div class="swiper-wrapper">
                {% for image in site.data.gallery %}
                <figure class="swiper-slide" {% if image.imageDelay %}data-swiper-autoplay="{{ image.imageDelay }}"
                    {% endif %}>
                    {% comment %} Offers different sizes, both portrait and landscape {% endcomment %}
                    <picture>
                        <source media="(orientation: portrait)" srcset="{{ image.imageSrcPortraitSml }} 1024w,
                        {{ image.imageSrcPortrait }} 2048w" sizes="100vw">
                        <source media="(orientation: landscape)" srcset="{{ image.imageSrcLandscapeSml }} 1368w,
                        {{ image.imageSrcLandscape }} 2736w" sizes="100vw">
                        <img src="{{ image.imageSrcLandscapeSml }}"
                            loading="{% if forloop.first %}eager{% else %}lazy{% endif %}" width="1368" height="912"
                            alt="{{ image.imageAlt }}.">
                    </picture>
                </figure>
                {% endfor %}
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <section class="content content-outro">
        <div class="editorial">
            <p>If you’ve got this far I’m flattered. Outside of work I enjoy playing with language in writing and poetry
                and the tactile, physical processes of film photography and print making.</p>
            <p>Any questions? Reach out to me at <a href="mailto:hi@chrisporter.uk" target="_blank"
                    rel="noopener noreferrer">hi@chrisporter.uk</a>, or you can find me on both <a
                    href="https://">LinkedIn</a> & <a href="#">Are.na</a>.
            <footer>
                <small>&copy; 2013 &mdash; {{ site.time | date: "%Y" }} Chris Porter. All images &copy; of their
                    respective owners</small>
            </footer>
        </div>
    </section>
</main>
