# My Markdown File

Here is some content for my Markdown file.

<script>
document.addEventListener('DOMContentLoaded', function() {
    const abstractLinks = document.querySelectorAll('.toggle-abstract');
    const bibtexLinks = document.querySelectorAll('.toggle-bibtex');

    abstractLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const abstract = this.nextElementSibling;
            abstract.style.display = abstract.style.display === 'none' ? 'block' : 'none';
        });
    });

    bibtexLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const bibtex = this.nextElementSibling;
            bibtex.style.display = bibtex.style.display === 'none' ? 'block' : 'none';
        });
    });
});
</script>

## Articles

{% for article in articles %}
  <h2>{{ article.title }}</h2>
  <p>{{ article.author }}</p>
  <a href="#" class="toggle-abstract">Show Abstract</a>
  <div class="abstract" style="display: none;">
    {{ article.abstract }}
  </div>
  <a href="#" class="toggle-bibtex">Show BibTeX</a>
  <pre class="bibtex" style="display: none;">
    {{ article.bibtex }}
  </pre>
{% endfor %}
