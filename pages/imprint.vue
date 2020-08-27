<template>
	<page-pad>
		<page-width>
			<app-richtext>
				<h1>Impressum</h1>
				<p>
					Informationspflicht laut § 5 TMG.
				</p>
				<p>
					Christian Albert<br/>
					Weißhausstr. 36<br/>
					50939 Köln<br/>
					Deutschland
				</p>
				<h2>
					Haftung für Inhalte:
				</h2>
				<p>
					Im Sinne von § 7 Absatz 1 TMG sind wir für die eigenen Inhalte auf dieser Webseite verantwortlich. Durch §§ 8 bis einschließlich 10 TMG sind wir aber nicht verpflichtet, gespeicherte oder übermittelte fremde Inhalte zu überwachen oder diese auf Rechtswidrigkeit zu prüfen. Das befreit uns jedoch nicht von der Pflicht, der Sperrung und Entfernung von Informationen nach geltenden Gesetzen nachzukommen.
				</p>
				<p>
					Icons von 
					<nuxt-link to="https://tablericons.com">tablericons.com</nuxt-link>
				</p>
			</app-richtext>
		</page-width>
	</page-pad>
</template>

<script>
export default {
	layout: 'meta',
	head() {
		return {
			title: 'Imprint – Mr. Prompter',
			description: "Mr. Prompter is a private project by Christian Albert.",
			meta: [
				{
					robots: 'none'
				}
			]
		}
	}
}
</script>
