export function renderGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
          <li class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
              <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
              <p><b>Likes:</b> ${likes}</p>
              <p><b>Views:</b> ${views}</p>
              <p><b>Comments:</b> ${comments}</p>
              <p><b>Downloads:</b> ${downloads}</p>
            </div>
          </li>
        `
    )
    .join('');
}

export function clearGallery(container) {
  container.innerHTML = '';
}

export function showLoader(loaderElement) {
  loaderElement.hidden = false;
}

export function hideLoader(loaderElement) {
  loaderElement.hidden = true;
}
