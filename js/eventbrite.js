class EventBrite  {
  constructor() {
		this.token_auth = '5K4QS7KZEGQ3OOY67HE5';
		this.ordenar = 'date';
	}
    async obtenerEventos(evento, categoria) {
			const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`)
			const eventos = await respuestaEvento.json()
			return {
					eventos
			}
    }

    async obtenerCategorias() {
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`)
        const categorias = await respuestaCategorias.json();
        return {
            categorias
        }
    }
}