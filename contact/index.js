function putForm(containerEl) {
  const componentEl = document.createElement("form");
  componentEl.innerHTML = `
  <form class="form">
  <h1 class="form__contact">Contacto</h1>
  <div class="form-container">
    <label class="form__title">
      <span class="form__span">NOMBRE</span>
      <input type="text" class="form__input" />
    </label>
    <label class="form__title">
      <span class="form__span">EMAIL</span>
      <input type="email" class="form__input" />
    </label>
    <label class="form__title">
      <span class="form__span">MENSAJE</span>
      <textarea
        name=""
        cols="30"
        rows="5"
        class="form_textarea"
      ></textarea>
    </label>
    <button type="submit" class="form__button">Enviar</button>
  </div>
</form>`;
  containerEl.appendChild(componentEl);
}
