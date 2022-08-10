"use strict";

let translations = Object.create(null);
let startup_language = config.language;

// ------------------------------------------------------------------------------------------------
//
//		Note to anyone who wants to add a translation:
//
//		Simply create a new object in this file that follows the format below.
//		Do NOT edit the capital letters part, only the strings on the right hand side.
//
//		Then send me a GitHub pull request.
//		Or for small changes, just open an issue.
//		Or if GitHub is too hard, talk to me on Discord.
//
//		Note that it is OK for some keys to be missing (English will be used for those).
//
// ------------------------------------------------------------------------------------------------

translations[`English`] = {

	TRANSLATION_BY: "",		// Name of the translator, for credits. Leave blank for no credit.

	MENU_FILE: `File`,

		MENU_ABOUT: `About`,
		MENU_NEW_BOARD: `New board`,
		MENU_NEW_SMALL_BOARD: `New small board`,
		MENU_NEW_RECTANGULAR_BOARD: `New rectangular board`,
		MENU_HANDICAP: `Handicap`,
		MENU_CLOSE_TAB: `Close tab`,
		MENU_OPEN: `Open...`,
		MENU_PASTE_SGF: `Paste SGF`,
		MENU_SAVE_GAME: `Save game`,
		MENU_SAVE_GAME_AS: `Save game as...`,
		MENU_SAVE_COLLECTION_AS: `Save collection as...`,
		MENU_QUIT: `Quit`,

	MENU_SETUP: `Setup`,

		MENU_LOCATE_KATAGO: `Locate KataGo...`,
		MENU_LOCATE_KATAGO_ANALYSIS_CONFIG: `Locate KataGo analysis config...`,
		MENU_CHOOSE_WEIGHTS: `Choose weights...`,
		MENU_LAUNCH_KATAGO_VIA_COMMAND: `Launch KataGo via command...`,
		MENU_CLEAR_CACHE: `Clear cache`,
		MENU_RESTART: `Restart`,
		MENU_ENGINE_REPORT_RATE: `Engine report rate`,

	MENU_TREE: `Tree`,

		MENU_PLAY_BEST_MOVE: `Play best move`,
		MENU_PASS: `Pass`,
		MENU_ROOT: `Root`,
		MENU_END: `End`,
		MENU_BACKWARD: `Backward`,
		MENU_FORWARD: `Forward`,
		MENU_BACKWARD_10: `Backward 10`,
		MENU_FORWARD_10: `Forward 10`,
		MENU_PREVIOUS_SIBLING: `Previous sibling`,
		MENU_NEXT_SIBLING: `Next sibling`,
		MENU_RETURN_TO_MAIN_LINE: `Return to main line`,
		MENU_FIND_PREVIOUS_FORK: `Find previous fork`,
		MENU_FIND_NEXT_FORK: `Find next fork`,
		MENU_PROMOTE_LINE: `Promote line`,
		MENU_PROMOTE_LINE_TO_MAIN_LINE: `Promote line to main line`,
		MENU_DELETE_NODE: `Delete node`,
		MENU_DELETE_ALL_PREVIOUS_FORKS: `Delete all previous forks`,

	MENU_TOOLS: `Tools`,

		MENU_NORMAL: `Normal`,
		MENU_ADD_BLACK: `Add Black`,
		MENU_ADD_WHITE: `Add White`,
		MENU_ADD_EMPTY: `Add Empty`,
		MENU_TRIANGLE: `Triangle`,
		MENU_SQUARE: `Square`,
		MENU_CIRCLE: `Circle`,
		MENU_CROSS: `Cross`,
		MENU_LABELS_ABC: `Labels (ABC)`,
		MENU_LABELS_123: `Labels (123)`,
		MENU_TOGGLE_ACTIVE_PLAYER: `Toggle active player`,
		MENU_GAME_INFO_EDITOR: `Game info editor`,

	MENU_ANALYSIS: `Analysis`,

		MENU_GO_HALT_TOGGLE: `Go / halt toggle`, 
		MENU_GO: `Go`,
		MENU_HALT: `Halt`,
		MENU_SELF_PLAY: `Self-play`,
		MENU_AUTOANALYSIS: `Autoanalysis`,
		MENU_BACKWARD_ANALYSIS: `Backward analysis`,
		MENU_AUTOANALYSIS_VISITS: `Autoanalysis visits`,
		MENU_SET_RULES: `Set rules`,
			MENU_CHINESE: `Chinese`,
			MENU_JAPANESE: `Japanese`,
			MENU_STONE_SCORING: `Stone Scoring`,
		MENU_SET_KOMI: `Set komi`,
		MENU_PV_LENGTH_MAX: `PV length (max)`,
		MENU_WIDE_ROOT_NOISE: `Wide root noise`,
		MENU_SYMMETRY_PRUNING: `Symmetry pruning`,
		MENU_OWNERSHIP: `Ownership`,
			MENU_NO_OWNERSHIP: `None`,
			MENU_DEAD_STONES: `Dead stones`,
			MENU_WHOLE_BOARD: `Whole board`,
			MENU_WHOLE_BOARD_ALT: `Whole board (alt)`,
		MENU_PER_MOVE: `...per-move (costly)`,
		MENU_CLEAR_ALL_ANALYSIS: `Clear all analysis`,

	MENU_DISPLAY: `Display`,

		MENU_VISIT_FILTER: `Visit filter`,
			MENU_ALL: `All`,
		MENU_NUMBERS: `Numbers`,
			MENU_NUM_LCB: `LCB`,
			MENU_NUM_SCORE: `Score`,
			MENU_NUM_DELTA: `Delta`,
			MENU_NUM_VISITS: `Visits`,
			MENU_NUM_VISITS_PC: `Visits (%)`,
			MENU_NUM_ORDER: `Order`,
			MENU_NUM_POLICY: `Policy`,
			MENU_NUM_WINRATE: `Winrate`,
		MENU_GRAPH: `Graph`,
			MENU_GRAPH_WINRATE: `Winrate`,
			MENU_GRAPH_SCORE: `Score`,
		MENU_BLACK_POV_ALWAYS: `Black POV always`,
		MENU_CANDIDATE_MOVES: `Candidate moves`,
		MENU_WITH_PV_MOUSEOVER: `...with PV mouseover`,
		MENU_FADE_BY_VISITS: `...fade by visits`,
		MENU_NEXT_MOVE_MARKERS: `Next move markers`,
		MENU_COLOURS: `Colours`,

	MENU_SIZES: `Sizes`,

		MENU_EMBIGGEN_SMALL_BOARDS: `Embiggen small boards`,
		MENU_INFO_FONT: `Info font`,
		MENU_GRAPH_WIDTH: `Graph width`,
		MENU_GRAPH_MAJOR_LINES: `Graph major lines`,
		MENU_GRAPH_MINOR_LINES: `Graph minor lines`,
		MENU_BOARD_LINES: `Board lines`,
		MENU_THUMBNAIL_SQUARES: `Thumbnail squares`,
		MENU_TREE_SPACING: `Tree spacing`,
		MENU_COMMENT_BOX: `Comment box`,

	MENU_MISC: `Misc`,

		MENU_ESCAPE: `Escape`,
		MENU_PLAY_BLACK: `Play Black`,
		MENU_PLAY_WHITE: `Play White`,
		MENU_LOAD_GAMES_AT_FINAL_POSITION: `Load games at final position`,
		MENU_GUESS_RULES_FROM_KOMI_ON_LOAD: `Guess rules from komi on load`,
		MENU_PREFER_TYGEM_HANDICAP_3_LAYOUT: `Prefer Tygem handicap-3 layout`,
		MENU_ENABLE_HARDWARE_ACCELERATION_FOR_GUI: `Enable hardware acceleration for GUI`,

	MENU_DEV: `Dev`,

		MENU_SHOW_ROOT_PROPERTIES: `Show root properties`,
		MENU_SHOW_NODE_PROPERTIES: `Show node properties`,
		MENU_SHOW_ENGINE_STDERR: `Show engine stderr`,
		MENU_ZOBRIST_MISMATCH_CHECKS: `Zobrist mismatch checks`,
		MENU_RESET_MISMATCH_WARNINGS: `Reset mismatch warnings`,
		MENU_SHOW_CONFIG_FILE: `Show config file`,
		MENU_TOGGLE_DEV_TOOLS: `Toggle dev tools`,

	// Items that show on first run, when KataGo (etc) have not been located...
	GUI_ENGINE_NOT_SET: `Engine not set.`,
	GUI_ENGINE_CONFIG_NOT_SET: `Engine config not set.`,
	GUI_WEIGHTS_NOT_SET: `Weights not set.`,
	GUI_RESOLVE_THIS: `Resolve this via the <span class="yellow">"Setup"</span> menu.`, 

	// Message that shows at startup while KataGo loads...
	GUI_AWAITING_RESPONSE_1: `Awaiting response from engine. If needed, select the`,
	GUI_AWAITING_RESPONSE_2: `<span class="yellow">Dev --> Show engine stderr</span> menu item for more info.`,

	// Info editor strings...
	INFO_BLACK: `Black`,
	INFO_BLACK_RANK: `BR`,
	INFO_WHITE: `White`,
	INFO_WHITE_RANK: `WR`,
	INFO_EVENT: `Event`,
	INFO_ROUND: `Round`,
	INFO_GAME_NAME: `Name`,
	INFO_PLACE: `Place`,
	INFO_DATE: `Date`,
	INFO_RESULT: `Result`,

	// Alerts...
	ALERT_RESTART_REQUIRED: `A restart of the GUI is now required.`,

	// About box...
	ABOUT_FILE_LOCATIONS: `Engine, engine config, and weights are at:`,
	ABOUT_CONFIG_LOCATION: `Ogatak config file is at:`,
	ABOUT_RAM_USAGE: `RAM usage (MB) (engine not included):`,
	ABOUT_THANKS_TRANSLATORS: `Thanks to the translators:`,

	// Message that shows if config.json cannot be parsed...
	BAD_CONFIG_1: `config file could not be parsed.`,
	BAD_CONFIG_2: `It will not be saved to until you fix this.`,
	BAD_CONFIG_3: `This means your settings will not be saved.`,
	BAD_CONFIG_4: `You should fix this.`,
	BAD_CONFIG_5: `You can also just delete the file.`,

};

// ------------------------------------------------------------------------------------------------

translations[`Français`] = {

	TRANSLATION_BY: "",

	MENU_FILE: `Fichier`,

		MENU_ABOUT: `À propos`,
		MENU_NEW_BOARD: `Nouveau`,
		MENU_NEW_SMALL_BOARD: `Nouveau - petit`,
		MENU_NEW_RECTANGULAR_BOARD: `Nouveau - rectangulaire`,
		MENU_HANDICAP: `Handicap`,
		MENU_CLOSE_TAB: `Fermer l'onglet`,
		MENU_OPEN: `Ouvrir...`,
		MENU_PASTE_SGF: `Coller du presse-papiers`,
		MENU_SAVE_GAME: `Enregistrer`,
		MENU_SAVE_GAME_AS: `Enregistrer sous...`,
		MENU_SAVE_COLLECTION_AS: `Enregistrer la collection sous...`,
		MENU_QUIT: `Quitter`,

	MENU_SETUP: `Moteur`,		// "Engine" (what's a good word for "setup"?)

		MENU_LOCATE_KATAGO: `Localiser KataGo...`,
		MENU_LOCATE_KATAGO_ANALYSIS_CONFIG: `Localiser analysis.cfg...`,
		MENU_CHOOSE_WEIGHTS: `Localiser les poids...`,
		MENU_LAUNCH_KATAGO_VIA_COMMAND: `Lancer KataGo avec la commande...`,
		MENU_CLEAR_CACHE: `Vider le cache`,
		MENU_RESTART: `Redémarrage`,
		MENU_ENGINE_REPORT_RATE: `Taux de rapport`,

	MENU_TREE: `Navigation`,

		MENU_PLAY_BEST_MOVE: `Jouer le meilleur coup`,
		MENU_PASS: `Passer`,
		MENU_ROOT: `Aller à la position initiale`,
		MENU_END: `Aller à la position finale`,
		MENU_BACKWARD: `Reculer`,
		MENU_FORWARD: `Avancer`,
		MENU_BACKWARD_10: `Reculer 10`,
		MENU_FORWARD_10: `Avancer 10`,
		MENU_PREVIOUS_SIBLING: `Frère à gauche`,
		MENU_NEXT_SIBLING: `Frère à droite`,
		MENU_RETURN_TO_MAIN_LINE: `Aller à la variation principale`,
		MENU_FIND_PREVIOUS_FORK: `Aller à la branche précédente`,
		MENU_FIND_NEXT_FORK: `Aller à la branche suivante`,
		MENU_PROMOTE_LINE: `Promouvoir la variation`,
		MENU_PROMOTE_LINE_TO_MAIN_LINE: `Rendre la variation principale`,
		MENU_DELETE_NODE: `Supprimer le noeud`,
		MENU_DELETE_ALL_PREVIOUS_FORKS: `Supprimer toutes les branches précédentes`,

	MENU_TOOLS: `Outils`,

		MENU_NORMAL: `Ordinaire`,
		MENU_ADD_BLACK: `Pierre noire`,
		MENU_ADD_WHITE: `Pierre blanche`,
		MENU_ADD_EMPTY: `Effaceur de pierres`,
		MENU_TRIANGLE: `Triangle`,
		MENU_SQUARE: `Carré`,
		MENU_CIRCLE: `Cercle`,
		MENU_CROSS: `Croix`,
		MENU_LABELS_ABC: `Lettre (ABC)`,
		MENU_LABELS_123: `Chiffre (123)`,
		MENU_TOGGLE_ACTIVE_PLAYER: `Changer de joueur`,
		MENU_GAME_INFO_EDITOR: `Propriétés de la partie`,

	MENU_ANALYSIS: `Analyse`,

		MENU_GO_HALT_TOGGLE: `Commencer / Halte`, 
		MENU_GO: `Commencer`,
		MENU_HALT: `Halte`,
		MENU_SELF_PLAY: `Auto-jeu`,
		MENU_AUTOANALYSIS: `Analyse automatique`,
		MENU_BACKWARD_ANALYSIS: `Analyse automatique (vers l'arrière)`,
		MENU_AUTOANALYSIS_VISITS: `Visites pour analyse automatique`,
		MENU_SET_RULES: `Règles`,
			MENU_CHINESE: `Chinoises`,
			MENU_JAPANESE: `Japonaises`,
			MENU_STONE_SCORING: `Comptage des pierres`,
		MENU_SET_KOMI: `Komi`,
		MENU_PV_LENGTH_MAX: `Longueur du PV (max)`,
		MENU_WIDE_ROOT_NOISE: `Bruit uniforme à la racine`,
		MENU_SYMMETRY_PRUNING: `Taille de symétrie`,
		MENU_OWNERSHIP: `Possession`,
			MENU_NO_OWNERSHIP: `Pas montré`,
			MENU_DEAD_STONES: `Pierres mortes`,
			MENU_WHOLE_BOARD: `Goban entier`,
			MENU_WHOLE_BOARD_ALT: `Goban entier (autre)`,
		MENU_PER_MOVE: `...pour chaque coup`,
		MENU_CLEAR_ALL_ANALYSIS: `Supprimer toutes les analyses`,

	MENU_DISPLAY: `Visualiser`,

		MENU_VISIT_FILTER: `Filtrer par visites`,
			MENU_ALL: `Toute`,
		MENU_NUMBERS: `Nombres`,
			MENU_NUM_LCB: `LCB`,
			MENU_NUM_SCORE: `Score`,
			MENU_NUM_DELTA: `Delta`,
			MENU_NUM_VISITS: `Visites`,
			MENU_NUM_VISITS_PC: `Visites (%)`,
			MENU_NUM_ORDER: `Ordre`,
			MENU_NUM_POLICY: `Prior`,
			MENU_NUM_WINRATE: `Prognostic`,
		MENU_GRAPH: `Graphique`,
			MENU_GRAPH_WINRATE: `Prognostic`,
			MENU_GRAPH_SCORE: `Score`,
		MENU_BLACK_POV_ALWAYS: `Du côté noir, toujours`,
		MENU_CANDIDATE_MOVES: `Coups recommandés`,
		MENU_WITH_PV_MOUSEOVER: `...avec le survol de la souris`,
		MENU_FADE_BY_VISITS: `...avec décoloration`,
		MENU_NEXT_MOVE_MARKERS: `Coups suivants`,
		MENU_COLOURS: `Couleurs`,

	MENU_SIZES: `Grandeur`,

		MENU_EMBIGGEN_SMALL_BOARDS: `Agrandir les petits gobans`,
		MENU_INFO_FONT: `Info`,
		MENU_GRAPH_WIDTH: `Graphique - largeur`,
		MENU_GRAPH_MAJOR_LINES: `Graphique - lignes principales`,
		MENU_GRAPH_MINOR_LINES: `Graphique - lignes mineures`,
		MENU_BOARD_LINES: `Lignes sur le goban`,
		MENU_THUMBNAIL_SQUARES: `Vignettes`,
		MENU_TREE_SPACING: `Arbre de jeu`,
		MENU_COMMENT_BOX: `Boîte de commentaires`,

	MENU_MISC: `Autre`,

		MENU_ESCAPE: `Échapper`,
		MENU_PLAY_BLACK: `Jouer en tant que noir`,
		MENU_PLAY_WHITE: `Jouer en tant que blanc`,
		MENU_LOAD_GAMES_AT_FINAL_POSITION: `Ouvrir le fichier à la position finale`,
		MENU_GUESS_RULES_FROM_KOMI_ON_LOAD: `Utilisez komi pour deviner les règles`,
		MENU_PREFER_TYGEM_HANDICAP_3_LAYOUT: `Préférez le placement handicap-3 de Tygem`,
		MENU_ENABLE_HARDWARE_ACCELERATION_FOR_GUI: `Accélération matérielle pour l'application`,

	MENU_DEV: `Développeur`,

		MENU_SHOW_ROOT_PROPERTIES: `Afficher les propriétés racine`,
		MENU_SHOW_NODE_PROPERTIES: `Afficher les propriétés du noeud`,
		MENU_SHOW_ENGINE_STDERR: `Afficher le moteur stderr`,
		MENU_ZOBRIST_MISMATCH_CHECKS: `Zobrist test de non-concordance`,
		MENU_RESET_MISMATCH_WARNINGS: `Réinitialiser les avertissements de non-concordance`,
		MENU_SHOW_CONFIG_FILE: `Afficher le fichier de configuration`,
		MENU_TOGGLE_DEV_TOOLS: `Outils de développement`,

	GUI_ENGINE_NOT_SET: `Vous devez localiser le moteur.`,
	GUI_ENGINE_CONFIG_NOT_SET: `Vous devez localiser analysis.cfg.`,
	GUI_WEIGHTS_NOT_SET: `Vous devez localiser les poids.`,
	GUI_RESOLVE_THIS: `Résoudre ce problème en utilisant le menu <span class="yellow">"Moteur"</span>.`,

	GUI_AWAITING_RESPONSE_1: `En attente de réponse du moteur. Si nécessaire, sélectionnez`,
	GUI_AWAITING_RESPONSE_2: `<span class="yellow">Développeur --> Afficher le moteur stderr</span> élément de menu.`,

	INFO_BLACK: `Joueur Noir`,
	INFO_BLACK_RANK: `Classement de Noir`,
	INFO_WHITE: `Joueur Blanc`,
	INFO_WHITE_RANK: `Classement de Blanc`,
	INFO_EVENT: `Événement`,
	INFO_ROUND: `Tour`,
	INFO_GAME_NAME: `Nom`,
	INFO_PLACE: `Lieu`,
	INFO_DATE: `Date`,
	INFO_RESULT: `Résultat`,

	ALERT_RESTART_REQUIRED: `Veuillez redémarrer l'application.`,

};

// ------------------------------------------------------------------------------------------------

translations[`русский`] = {

	TRANSLATION_BY: `ParmuzinAlexander`,

	MENU_FILE: `Файл`,

		MENU_ABOUT: `О программе`,
		MENU_NEW_BOARD: `Новая доска`,
		MENU_NEW_SMALL_BOARD: `Новая маленькая доска`,
		MENU_NEW_RECTANGULAR_BOARD: `Новая прямоугольная доска`,
		MENU_HANDICAP: `Фора`,
		MENU_CLOSE_TAB: `Закрыть вкладку`,
		MENU_OPEN: `Открыть...`,
		MENU_PASTE_SGF: `Вставить SGF`,
		MENU_SAVE_GAME: `Сохранить игру`,
		MENU_SAVE_GAME_AS: `Сохранить игру как...`,
		MENU_SAVE_COLLECTION_AS: `Сохранить коллекцию как...`,
		MENU_QUIT: `Выход`,

	MENU_SETUP: `Установка`,

		MENU_LOCATE_KATAGO: `Исполняемый файл KataGo...`,
		MENU_LOCATE_KATAGO_ANALYSIS_CONFIG: `Файл настроек анализа...`,
		MENU_CHOOSE_WEIGHTS: `Файл сети...`,
		MENU_LAUNCH_KATAGO_VIA_COMMAND: `Запуск KataGo с помощью команды...`,
		MENU_CLEAR_CACHE: `Очистить кэш`,
		MENU_RESTART: `Перезапуск`,
		MENU_ENGINE_REPORT_RATE: `Частота отчетов`,

	MENU_TREE: `Дерево`,

		MENU_PLAY_BEST_MOVE: `Сделать лучший ход`,
		MENU_PASS: `Пас`,
		MENU_ROOT: `Начальная позиция`,
		MENU_END: `Конечная позиция`,
		MENU_BACKWARD: `Назад`,
		MENU_FORWARD: `Вперёд`,
		MENU_BACKWARD_10: `Назад на 10 ходов`,
		MENU_FORWARD_10: `Вперёд на 10 ходов`,
		MENU_PREVIOUS_SIBLING: `Предыдущая ветвь`,
		MENU_NEXT_SIBLING: `Следующая ветвь`,
		MENU_RETURN_TO_MAIN_LINE: `К главной ветви`,
		MENU_FIND_PREVIOUS_FORK: `Предыдущая развилка`,
		MENU_FIND_NEXT_FORK: `Следующая развилка`,
		MENU_PROMOTE_LINE: `Повысить ветвь`,
		MENU_PROMOTE_LINE_TO_MAIN_LINE: `Сделать главной ветвью`,
		MENU_DELETE_NODE: `Удалить ход`,
		MENU_DELETE_ALL_PREVIOUS_FORKS: `Удалить другие ветви`,

	MENU_TOOLS: `Инструменты`,

		MENU_NORMAL: `Обычный`,
		MENU_ADD_BLACK: `Чёрный камень`,
		MENU_ADD_WHITE: `Белый камень`,
		MENU_ADD_EMPTY: `Стереть камень`,
		MENU_TRIANGLE: `Треугольник`,
		MENU_SQUARE: `Квадрат`,
		MENU_CIRCLE: `Круг`,
		MENU_CROSS: `Крестик`,
		MENU_LABELS_ABC: `Буква`,
		MENU_LABELS_123: `Цифра`,
		MENU_TOGGLE_ACTIVE_PLAYER: `Смена игрока`,
		MENU_GAME_INFO_EDITOR: `Редактировать информацию об игре`,

	MENU_ANALYSIS: `Анализ`,

		MENU_GO_HALT_TOGGLE: `Запустить / остановить`, 
		MENU_GO: `Запустить`,
		MENU_HALT: `Остановить`,
		MENU_SELF_PLAY: `Игра сам с собой`,
		MENU_AUTOANALYSIS: `Автоматический анализ`,
		MENU_BACKWARD_ANALYSIS: `Автоматический анализ назад`,
		MENU_AUTOANALYSIS_VISITS: `Посещений автоматического анализа`,
		MENU_SET_RULES: `Правила`,
			MENU_CHINESE: `Китайские`,
			MENU_JAPANESE: `Японские`,
			MENU_STONE_SCORING: `Древние китайские`,
		MENU_SET_KOMI: `Коми`,
		MENU_PV_LENGTH_MAX: `Количество предлагаемых ходов`,
		MENU_WIDE_ROOT_NOISE: `Широкий корневой шум`,
		MENU_SYMMETRY_PRUNING: `Симметричное отсечение`,
		MENU_OWNERSHIP: `Влияние`,
			MENU_NO_OWNERSHIP: `Не показывать`,
			MENU_DEAD_STONES: `Захваченные камни`,
			MENU_WHOLE_BOARD: `Вся доска`,
			MENU_WHOLE_BOARD_ALT: `Вся доска (другой вид)`,
		MENU_PER_MOVE: `...каждый ход`,
		MENU_CLEAR_ALL_ANALYSIS: `Очистить анализ`,

	MENU_DISPLAY: `Вид`,

		MENU_VISIT_FILTER: `Фильтр посещений`,
			MENU_ALL: `Всё`,
		MENU_NUMBERS: `Числа`,
			MENU_NUM_LCB: `LCB`,
			MENU_NUM_SCORE: `Счёт`,
			MENU_NUM_DELTA: `Дельта`,
			MENU_NUM_VISITS: `Посещения`,
			MENU_NUM_VISITS_PC: `Посещения (%)`,
			MENU_NUM_ORDER: `Очередь`,
			MENU_NUM_POLICY: `Политика`,
			MENU_NUM_WINRATE: `Шанс победы`,
		MENU_GRAPH: `График`,
			MENU_GRAPH_WINRATE: `Шанс победы`,
			MENU_GRAPH_SCORE: `Счёт`,
		MENU_BLACK_POV_ALWAYS: `Всегда за чёрных`,
		MENU_CANDIDATE_MOVES: `Предложение хода`,
		MENU_WITH_PV_MOUSEOVER: `...ветвь при наведении курсора`,
		MENU_FADE_BY_VISITS: `...цвет по количеству посещений`,
		MENU_NEXT_MOVE_MARKERS: `Показывать следующий ход`,
		MENU_COLOURS: `Цвета`,

	MENU_SIZES: `Размер`,

		MENU_EMBIGGEN_SMALL_BOARDS: `Растянуть маленькие доски`,
		MENU_INFO_FONT: `Шрифт информации`,
		MENU_GRAPH_WIDTH: `Ширина графика`,
		MENU_GRAPH_MAJOR_LINES: `Основная линия графика`,
		MENU_GRAPH_MINOR_LINES: `Дополнительная линия графика`,
		MENU_BOARD_LINES: `Линии на доске`,
		MENU_THUMBNAIL_SQUARES: `Миниатюры`,
		MENU_TREE_SPACING: `Дерево игры`,
		MENU_COMMENT_BOX: `Комментарии`,

	MENU_MISC: `Разное`,

		MENU_ESCAPE: `Уйти`,
		MENU_PLAY_BLACK: `Играть за чёрных`,
		MENU_PLAY_WHITE: `Играть за белых`,
		MENU_LOAD_GAMES_AT_FINAL_POSITION: `Конечная позиция после загрузки файла`,
		MENU_GUESS_RULES_FROM_KOMI_ON_LOAD: `Угадывать правила по коми`,
		MENU_PREFER_TYGEM_HANDICAP_3_LAYOUT: `Расположение трёх камней форы как на Tygem`,
		MENU_ENABLE_HARDWARE_ACCELERATION_FOR_GUI: `Включить аппаратное ускорение для графического интерфейса`,

	MENU_DEV: `Разработка`,

		MENU_SHOW_ROOT_PROPERTIES: `Свойства файла`,
		MENU_SHOW_NODE_PROPERTIES: `Свойства хода`,
		MENU_SHOW_ENGINE_STDERR: `Журнал программы`,
		MENU_ZOBRIST_MISMATCH_CHECKS: `Zobrist проверка несоответствий`,
		MENU_RESET_MISMATCH_WARNINGS: `Сброс предупреждений о несоответствии`,
		MENU_SHOW_CONFIG_FILE: `Показать файл настроек`,
		MENU_TOGGLE_DEV_TOOLS: `Инструменты разработчика`,

	GUI_ENGINE_NOT_SET: `Исполняемый файл KataGo не установлен.`,
	GUI_ENGINE_CONFIG_NOT_SET: `Файл настроек анализа не установлен.`,
	GUI_WEIGHTS_NOT_SET: `Файл сети не установлен.`,
	GUI_RESOLVE_THIS: `Решите это с помощью меню <span class="yellow">«Установить»</span>.`,

	GUI_AWAITING_RESPONSE_1: `Ожидание ответа от программы. При необходимости выберите`,
	GUI_AWAITING_RESPONSE_2: `<span class="yellow">Разработка --> Журнал программы</span> пункт меню.`,

	INFO_BLACK: `Игрок чёрными`,
	INFO_BLACK_RANK: `Ранг чёрных`,
	INFO_WHITE: `Игрок белыми`,
	INFO_WHITE_RANK: `Ранг белых`,
	INFO_EVENT: `Турнир`,
	INFO_ROUND: `Тур`,
	INFO_GAME_NAME: `Название`,
	INFO_PLACE: `Место`,
	INFO_DATE: `Дата`,
	INFO_RESULT: `Результат`,

	ALERT_RESTART_REQUIRED: `Теперь требуется перезапуск графического интерфейса.`,

	ABOUT_FILE_LOCATIONS: `Расположение KataGo, настроек анализа и файла сети:`,
	ABOUT_CONFIG_LOCATION: `Расположение файла настроек Ogatak:`,
	ABOUT_RAM_USAGE: `Использование оперативной памяти (Мбайт):`,

	BAD_CONFIG_1: `Не удалось проанализировать файл настроек.`,
	BAD_CONFIG_2: `Он не будет сохранен до тех пор, пока вы не исправите это.`,
	BAD_CONFIG_3: `Это означает, что ваши настройки не будут сохранены.`,
	BAD_CONFIG_4: `Вы должны это исправить.`,
	BAD_CONFIG_5: `Вы также можете просто удалить файл.`,

};

translations[`中文（台灣）`] = {

	TRANSLATION_BY: `CGLemon`,

	MENU_FILE: `檔案`,

		MENU_ABOUT: `關於`,
		MENU_NEW_BOARD: `新開棋局`,
		MENU_NEW_SMALL_BOARD: `新開矩形棋局`,
		MENU_NEW_RECTANGULAR_BOARD: `新開小盤面棋局`,
		MENU_HANDICAP: `讓子數`,
		MENU_CLOSE_TAB: `關閉標籤`,
		MENU_OPEN: `打開...`,
		MENU_PASTE_SGF: `貼上 SGF`,
		MENU_SAVE_GAME: `保存遊戲`,
		MENU_SAVE_GAME_AS: `保存遊戲至...`,
		MENU_SAVE_COLLECTION_AS: `保存遊戲集至...`,
		MENU_QUIT: `結束`,

	MENU_SETUP: `設定`,

		MENU_LOCATE_KATAGO: `定位 KataGo...`,
		MENU_LOCATE_KATAGO_ANALYSIS_CONFIG: `定位 KataGo 設定檔...`,
		MENU_CHOOSE_WEIGHTS: `定位權重...`,
		MENU_LAUNCH_KATAGO_VIA_COMMAND: `通過指令加載 KataGo...`,
		MENU_CLEAR_CACHE: `清除 KataGo 快取`,
		MENU_RESTART: `重新啟動 KataGo`,
		MENU_ENGINE_REPORT_RATE: `引擎回報時間間隔（秒）`,

	MENU_TREE: `遊戲樹`,

		MENU_PLAY_BEST_MOVE: `產生最佳著手`,
		MENU_PASS: `虛手`,
		MENU_ROOT: `跳到起始位置`,
		MENU_END: `跳到結束位置`,
		MENU_BACKWARD: `倒退一手`,
		MENU_FORWARD: `前進一手`,
		MENU_BACKWARD_10: `倒退十手`,
		MENU_FORWARD_10: `前進十手`,
		MENU_PREVIOUS_SIBLING: `跳到左節點`,
		MENU_NEXT_SIBLING: `跳到右節點`,
		MENU_RETURN_TO_MAIN_LINE: `退回主分支`,
		MENU_FIND_PREVIOUS_FORK: `跳到前個分支點`,
		MENU_FIND_NEXT_FORK: `跳到下個分支點`,
		MENU_PROMOTE_LINE: `晉升分支`,
		MENU_PROMOTE_LINE_TO_MAIN_LINE: `晉升分支至主分支`,
		MENU_DELETE_NODE: `刪除節點`,
		MENU_DELETE_ALL_PREVIOUS_FORKS: `刪除節點之前的分支`,

	MENU_TOOLS: `工具箱`,

		MENU_NORMAL: `普通模式`,
		MENU_ADD_BLACK: `添加黑棋`,
		MENU_ADD_WHITE: `添加白棋`,
		MENU_ADD_EMPTY: `移除棋子`,
		MENU_TRIANGLE: `三角形`,
		MENU_SQUARE: `正方形`,
		MENU_CIRCLE: `圓形`,
		MENU_CROSS: `叉號`,
		MENU_LABELS_ABC: `標記英文 (abc)`,
		MENU_LABELS_123: `標記數字 (123)`,
		MENU_TOGGLE_ACTIVE_PLAYER: `切換當前玩家顏色`,
		MENU_GAME_INFO_EDITOR: `編輯遊戲資訊`,

	MENU_ANALYSIS: `分析`,

		MENU_GO_HALT_TOGGLE: `執行 / 暫停`, 
		MENU_GO: `執行`,
		MENU_HALT: `暫停`,
		MENU_SELF_PLAY: `自我對戰`,
		MENU_AUTOANALYSIS: `自動分析`,
		MENU_BACKWARD_ANALYSIS: `背景分析`,
		MENU_AUTOANALYSIS_VISITS: `自動分析的訪問次數`,
		MENU_SET_RULES: `規則`,
			MENU_CHINESE: `中國`,
			MENU_JAPANESE: `日本`,
			MENU_STONE_SCORING: `還頭棋`,
		MENU_SET_KOMI: `貼目`,
		MENU_PV_LENGTH_MAX: `主變化最大顯示深度`,
		MENU_WIDE_ROOT_NOISE: `根節點探索係數 (wide root noise)`,
		MENU_SYMMETRY_PRUNING: `對稱剪枝`,
		MENU_OWNERSHIP: `形勢判斷`,
			MENU_NO_OWNERSHIP: `無`,
			MENU_DEAD_STONES: `死棋`,
			MENU_WHOLE_BOARD: `整個盤面`,
			MENU_WHOLE_BOARD_ALT: `整個盤面 (alt)`,
		MENU_PER_MOVE: `根據後選手更新形勢判斷`,
		MENU_CLEAR_ALL_ANALYSIS: `清除分析資訊`,

	MENU_DISPLAY: `顯示畫面`,

		MENU_VISIT_FILTER: `訪問數過濾器`,
			MENU_ALL: `不使用`,
		MENU_NUMBERS: `數值`,
			MENU_NUM_LCB: `LCB`,
			MENU_NUM_SCORE: `領先目數`,
			MENU_NUM_DELTA: `後選手目差`,
			MENU_NUM_VISITS: `訪問數`,
			MENU_NUM_VISITS_PC: `訪問數 (%)`,
			MENU_NUM_ORDER: `優先級`,
			MENU_NUM_POLICY: `次一手機率`,
			MENU_NUM_WINRATE: `勝率`,
		MENU_GRAPH: `分析圖`,
			MENU_GRAPH_WINRATE: `勝率`,
			MENU_GRAPH_SCORE: `領先目數`,
		MENU_BLACK_POV_ALWAYS: `總是顯示黑棋觀點`,
		MENU_CANDIDATE_MOVES: `顯示後選手`,
		MENU_WITH_PV_MOUSEOVER: `...以滑鼠顯示主變化`,
		MENU_FADE_BY_VISITS: `...淡化低訪問數後選手`,
		MENU_NEXT_MOVE_MARKERS: `標示下一手`,
		MENU_COLOURS: `顏色配置`,

	MENU_SIZES: `尺寸大小`,

		MENU_EMBIGGEN_SMALL_BOARDS: `拉伸較小棋盤`,
		MENU_INFO_FONT: `訊息字體`,
		MENU_GRAPH_WIDTH: `分析圖寬度`,
		MENU_GRAPH_MAJOR_LINES: `分析圖主線條`,
		MENU_GRAPH_MINOR_LINES: `分析圖輔助線條`,
		MENU_BOARD_LINES: `棋盤線條`,
		MENU_THUMBNAIL_SQUARES: `棋盤縮圖`,
		MENU_TREE_SPACING: `遊戲樹`,
		MENU_COMMENT_BOX: `評論區塊`,

	MENU_MISC: `其它`,

		MENU_ESCAPE: `退回主畫面`,
		MENU_PLAY_BLACK: `引擎執黑`,
		MENU_PLAY_WHITE: `引擎執白`,
		MENU_LOAD_GAMES_AT_FINAL_POSITION: `以終局狀態載入棋譜`,
		MENU_GUESS_RULES_FROM_KOMI_ON_LOAD: `以載入棋譜的貼目猜測規則`,
		MENU_PREFER_TYGEM_HANDICAP_3_LAYOUT: `以 Tygem 風格佈置讓三子棋`,
		MENU_ENABLE_HARDWARE_ACCELERATION_FOR_GUI: `圖形界面使用硬體加速`,

	MENU_DEV: `開發人員選項`,

		MENU_SHOW_ROOT_PROPERTIES: `顯示 SGF 根節點屬性`,
		MENU_SHOW_NODE_PROPERTIES: `顯示當前 SGF 節點屬性`,
		MENU_SHOW_ENGINE_STDERR: `顯示引擎標準錯誤輸出`,
		MENU_ZOBRIST_MISMATCH_CHECKS: `檢查 Zobrist 哈希值是否和 KataGo 一致`,
		MENU_RESET_MISMATCH_WARNINGS: `重置檢查警告`,
		MENU_SHOW_CONFIG_FILE: `顯示設定檔`,
		MENU_TOGGLE_DEV_TOOLS: `顯示網頁開發工具`,

	// Items that show on first run, when KataGo (etc) have not been located...
	GUI_ENGINE_NOT_SET: `引擎尚未設定完成`,
	GUI_ENGINE_CONFIG_NOT_SET: `設定檔尚未設定完成`,
	GUI_WEIGHTS_NOT_SET: `權重尚未設定完成`,
	GUI_RESOLVE_THIS: `通過 <span class="yellow">"設定"</span> 選單解決此問題`, 

	// Message that shows at startup while KataGo loads...
	GUI_AWAITING_RESPONSE_1: `正在等待引擎回應，如果需要請按`,
	GUI_AWAITING_RESPONSE_2: `開發人員選項內  <span class="yellow">Dev --> 顯示引擎標準錯誤輸出</span> 獲取更多訊息`,

	// Info editor strings...
	INFO_BLACK: `黑方名稱`,
	INFO_BLACK_RANK: `黑方等級`,
	INFO_WHITE: `白方名稱`,
	INFO_WHITE_RANK: `白方等級`,
	INFO_EVENT: `事件`,
	INFO_ROUND: `回合`,
	INFO_GAME_NAME: `遊戲名稱`,
	INFO_PLACE: `地點`,
	INFO_DATE: `時間`,
	INFO_RESULT: `結果`,

	// Alerts...
	ALERT_RESTART_REQUIRED: `需要關閉並重新起動程式`,

	// About box...
	ABOUT_FILE_LOCATIONS: `引擎、設定檔和權重位於:`,
	ABOUT_CONFIG_LOCATION: `Ogatak 的設定檔檔案位於:`,
	ABOUT_RAM_USAGE: `記憶體已使用 (MB) (不包含引擎):`,

	// Message that shows if config.json cannot be parsed...
	BAD_CONFIG_1: `config.json 不能被解析`,
	BAD_CONFIG_2: `直到你修復問題前都不會被保存`,
	BAD_CONFIG_3: `這表示當前的設定值不會被保存`,
	BAD_CONFIG_4: `你應該修復此問題`,
	BAD_CONFIG_5: `或是直接刪除此檔案`,

};

// ------------------------------------------------------------------------------------------------
//                              No edits below this point please.
// ------------------------------------------------------------------------------------------------

function translate(key, force_language = null) {

	// Note that we usually use the language which was in config.json at startup so
	// that in-flight calls to translate() return consistent results even if the user
	// switches config.language at some point. (Thus, the user will need to restart
	// to see any change.)

	let language = force_language || startup_language;

	if (translations[language] && translations[language][key]) {
		return translations[language][key];
	} else if (translations["English"] && translations["English"][key]) {
		return translations["English"][key];
	} else {
		return key;
	}

}

function all_translators() {
	let set = Object.create(null);
	for (let dict of Object.values(translations)) {
		if (dict["TRANSLATION_BY"]) {
			set[dict["TRANSLATION_BY"]] = true;
		}
	}
	return Object.keys(set);
}

function all_strings(language, with_english) {
	let arr = [];
	for (let [key, value] of Object.entries(translations[language])) {
		arr.push(value);
		if (with_english) {
			arr[arr.length - 1] += " (" + translations["English"][key] + ")";
		}
	}
	return arr;
}

function missing_keys(language) {
	let arr = [];
	for (let key of Object.keys(translations["English"])) {
		for (let language of Object.keys(translations)) {
			if (!translations[language].hasOwnProperty(key)) {
				arr.push(key);
			}
		}
	}
	return arr;
}

function count_all_missing() {
	let ret = {};
	for (let key of Object.keys(translations["English"])) {
		for (let language of Object.keys(translations)) {
			if (!translations[language].hasOwnProperty(key)) {
				if (ret[language]) {
					ret[language] += 1;
				} else {
					ret[language] = 1;
				}
			}
		}
	}
	return ret;
}

// Validate dictionaries... (every key should be in the English version)

for (let language of Object.keys(translations)) {
	for (let key of Object.keys(translations[language])) {
		if (!translations["English"].hasOwnProperty(key)) {
			throw new Error(`Bad key (${key}) in language dictionary ${language}`);
		}
	}
}

// Also export a list of all languages. I believe this is guaranteed to be insertion order:

let all_languages = Object.keys(translations);



module.exports = {translate, all_translators, all_strings, missing_keys, count_all_missing, all_languages};
