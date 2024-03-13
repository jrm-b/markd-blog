# Markd blog

Markd blog est un simple blog statique permettant de rendre directement des fichiers markdowns. Il utilise une base de donnée présente au sein du même répertoire racine grâce à l'API file system de nodejs. Le système s'appuis sur un simple fichier json qui fait office d'annuaire des différents articles.

Le fichier markdown est ensuite process en HTML grâce au package npm @dimerapp/markdown, puis envoyer à la vue quand nécessaire. Chaque page est construite avec @kitajs/html permettant de faire du templating en syntaxe JSX et ensuite le process en HTML et donc rendre les pages en SSR (nécessaire lorsqu'on parle d'un blog).

L'infrastructure de l'application repose sur le framework typescript Adonisjs v6 et Tailwind css pour le style. Très loin d'être parfait le but était avant tout de pratiquer l'API nodejs, la POO ainsi que d'apréhender la DI.
