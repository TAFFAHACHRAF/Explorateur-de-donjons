Introduction : 
Fortune, gloire et pouvoir. Cet homme avait amassé toutes les richesses du monde. Son nom : Gold D
Jones, roi de l’archéologie et des temples anciens. Ses dernières paroles incitèrent les personnes de
toute la planète à s’aventurer sous terre :
« Mon trésor, je vous le laisse. Si vous le voulez, trouvez-le. Je l’ai laissé quelque part dans ce monde! »
Tous se lancèrent à la recherche du temple maudit dans l’espoir de mettre la main sur ce fameux trésor.
Le monde entier connu alors une grande vague d’explorateurs et de voleurs de tombeaux!
Après plusieurs années de recherches, vous avez finalement trouvé le temple maudit! Vous semblez
aussi être le premier à l’avoir trouvé. Il ne vous reste plus qu’à en ressortir tous les trésors!

Description

Description du projet
Ce projet consiste à créer un petit jeu de style arcade qui pourra se jouer dans votre navigateur web. Le
jeu permet de déplacer un personnage dans un donjon rempli de pièges et de trésors. Quand le
personnage trouve un trésor, il gagne des points. S’il tombe plutôt dans un piège, il perd de l’énergie. Le
but est simplement d’amasser le plus de points possibles avant que l’énergie du joueur ne tombe à zéro.

Génération du donjon
Le donjon est représenté par une grille à 2 dimensions. La taille de cette grille est générée
aléatoirement. Sa largeur doit être de 25 tuiles et sa hauteur doit être de 15 tuiles.
Par défaut, chaque tuile de la grille du donjon peut contenir une des 2 valeurs suivante :
1. Une tuile contenant un piège (environ 90% des tuiles)
2. Une tuile contenant une pièce du trésor (environ 10% des tuiles)

Héros du jeu
Le héros de votre jeu doit commencer sur la tuile du milieu de la grille du donjon. À chaque tour,
l’utilisateur peut déplacer le héros ou quitter le donjon. Le héros peut se déplacer d’une seule tuile à la
fois vers le haut, le bas, à droite ou à gauche. C’est à l’utilisateur de décider dans quelle direction le
héros se déplacera. Vous pouvez utiliser des boutons pour que l’utilisateur choisisse comment déplacer
le héros ou s’il veut sortir du donjon.
À chaque déplacement sur une nouvelle tuile, le héros actionnera les effets de la tuile et désactivera
celle-ci pour le reste de la partie. Essentiellement, si le joueur tombe sur une tuile contenant un trésor, il
le ramasse et s’il tombe sur un piège, il l’actionne. Dans tous les cas, la tuile devient vide après que le
joueur est passé dessus. Le héros pourra aussi se déplacer sur les tuiles vides. Assurez-vous que votre
héro ne puisse pas faire de mouvements invalides comme sortir à l’extérieur de la grille du donjon.
Le héros possède aussi des points d’énergies qui diminueront de 1 point à chaque fois que l’utilisateur
marche sur un piège. Le héros débutera toutes les parties avec un nombre fixe d’énergie (40 points
d’énergies semblent un bon nombre pour commencer).

Pointage
Le jeu doit conserver un score pour le joueur. Dépendant des actions du joueur, il gagnera ou perdra des
points :
• Si le héros tombe sur une pièce du trésor, il gagne 1000 points
• Si le héros marche sur un piège, il perd 50 points
• Si le héros marche sur une tuile vide, il perd 10 points

Affichage
L’affichage du donjon doit être clair à l’écran. Vous devez voir la position des pièges, des pièces du
trésor ainsi que du personnage.
L’énergie doit être affiché sous le format d’une barre d’énergie. Elle sera pleine au début du jeu et
diminuera à chaque fois que le joueur perdra de l’énergie. Assurez-vous que la barre d’énergie
représente exactement le ratio de la quantité d’énergies restant sur la quantité d’énergies initiales.
Le score doit être affiché sous un format numérique et doit être clairement visible à chaque étape de
votre programme.
Vous pouvez vous fier à l’image ci-dessus pour l’interface graphique

Fin du programme
Le jeu se termine quand le héros quitte le donjon ou quand ses points d’énergies atteignent zéro. À la fin
de la partie, réaffichez le score du joueur et invitez-le à réessayé. Vous devez donc être en mesure de
réinitialiser le jeu.

Fonctionnalités supplémentaires
Pour ce projet, je vous encourage fortement d’essayer d’ajouter des fonctionnalités supplémentaires. Il
sera possible d’accumuler des points bonis pour le projet en fonction de la complexité de vos ajouts au
devoir. Voici une liste d’exemples de fonctionnalités qui pourrait vous donner des points
supplémentaires :
• Changer la génération du donjon pour ajouter des fonctionnalités supplémentaires, comme des
murs, des pièges différents ou encore des bonus.
• Ajouter un inventaire au héros. Le héros pourrait trouver des objets dans le donjon qui lui
permettrait d’activer certains effets, comme détruire des pièges autour de lui,
automatiquement amasser les trésors autour du joueur ou encore de se déplacer de plusieurs
cases en sautant par-dessus des pièges.
• Ajouter des ennemis qui se déplace aléatoirement dans le donjon. À chaque tour, ces ennemis
pourraient se déplacer aléatoirement d’une case sans déclencher les pièges. Si le héros
rencontre un ennemi, son énergie et son score pourrait être affecté.
Si vous ajoutez ce genre de fonctionnalités, essayez de garder le jeu bien balancé pour qu’il ne devienne
pas trop facile ou simplement impossible.

Pondération
Ce projet vaut pour 35% de la session. Toutefois, il sera évalué sur 15 points. Plus précisément, vous
serez évalué selon les critères suivants :
Critères Pondération
Fonctionnement du programme 10 points
Ergonomie et facilité d’utilisation du programme 3 points
Documentation et bonnes pratiques 2 points
Total 15 points
Fonctionnalité supplémentaire 3 points boni maximum
Assurez-vous de bien documenter votre code (commentaires), de suivre les bonnes pratiques et aussi de
faire un programme facile à utiliser pour l’utilisateur puisque vous serez évalué sur ces critères.

Astuces
Il peut être intimidant d’avoir à créer un programme comme celui-ci. Voici quelques trucs et astuces
pour vous aider :
• Ne commencez pas par l’interface graphique. Dans ce genre de programme, il est plus facile de
s’occuper des données en mémoire et de leur modification. Modifiez l’interface graphique
uniquement lorsque les opérations en mémoire fonctionnent bien.
• La génération du donjon est une grille à 2 dimensions. Elle doit donc être un tableau à 2
dimensions en mémoire. Ce tableau contiendra des valeurs indiquant ce qu’il y a pour chaque
tuile du donjon, soit une tuile vide, un piège ou un trésor. Ces valeurs peuvent être des entiers
(0 à 2), des caractères ou même du texte. À vous de décider comment vous voulez le
programmer.
• Séparez certains concepts dans différents fichiers. Il est plus facile de comprendre le code et de
bien s’organiser si vous séparer les différents éléments de votre jeu dans différents fichiers
Javascript. Dans notre cas, on peut probablement séparer la grille du donjon, le joueur et la
logique principale du jeu dans leur propre fichier. N’hésitez pas à vous créer plus de fichiers si
c’est nécessaire.
• Commencez par faire une interface simple. L’affichage dans le navigateur peut simplement être
des <div> de différentes couleurs pour identifier le joueur, les pièges et les trésors. Rien ne vous
empêche par la suite à améliorer votre interface.

Les étapes que j'ai suivie pour réaliser ce projet :
1. Créez une grille à deux dimensions pour représenter le donjon, avec une largeur de 25 tuiles et une hauteur de 15 tuiles.
2. Générez aléatoirement les tuiles du donjon, avec 90% des tuiles contenant un piège et 10% des tuiles contenant une pièce de trésor.
3. Créez une classe pour représenter le héros du jeu, avec des attributs pour sa position, son énergie et son score.
4. Affichez le donjon, le héros, sa barre d'énergie et son score à l'écran.
5. Mettez en place une boucle de jeu qui se répète jusqu'à ce que le héros quitte le donjon ou que son énergie atteigne zéro.
6. Dans chaque itération de la boucle de jeu, attendez l'entrée de l'utilisateur pour déplacer le héros ou quitter le donjon.
7. Lorsque le héros se déplace sur une nouvelle tuile, vérifiez le type de tuile et appliquez les effets correspondants sur le héros et la tuile.
8. Mettez à jour l'énergie et le score du héros en fonction de l'effet de la tuile.
9. Réaffichez le donjon, le héros, sa barre d'énergie et son score à chaque itération de la boucle de jeu.
10. Lorsque le jeu se termine, affichez le score final du joueur et invitez-le à rejouer.