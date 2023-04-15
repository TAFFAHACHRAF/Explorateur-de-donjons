import random
import tkinter as tk

class DungeonGame:
    def __init__(self):
        self.width = 25
        self.height = 15
        self.player_x = self.width // 2
        self.player_y = self.height // 2
        self.energy = 40
        self.score = 0
        self.dungeon = self.generate_dungeon()

    def generate_dungeon(self):
        dungeon = [[0 for y in range(self.height)] for x in range(self.width)]
        for x in range(self.width):
            for y in range(self.height):
                if random.random() < 0.9:
                    dungeon[x][y] = 1
        dungeon[self.player_x][self.player_y] = 2 # 2 représente le joueur
        return dungeon

    def move_player(self, dx, dy):
        new_x = self.player_x + dx
        new_y = self.player_y + dy
        if new_x < 0 or new_x >= self.width or new_y < 0 or new_y >= self.height:
            return
        if self.dungeon[new_x][new_y] == 1:
            self.energy -= 1
            self.score -= 50
        elif self.dungeon[new_x][new_y] == 2:
            return
        else:
            self.score -= 10
        if self.dungeon[new_x][new_y] == 3:
            self.score += 1000
        self.energy -= 1
        self.dungeon[self.player_x][self.player_y] = 0
        self.player_x = new_x
        self.player_y = new_y
        self.dungeon[self.player_x][self.player_y] = 2

    def quit_game(self):
        # Fonction pour quitter le jeu
        pass

# Création de l'interface utilisateur avec Tkinter
class Application(tk.Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.pack()
        self.create_widgets()

    def create_widgets(self):
        # Crée les widgets nécessaires pour l'interface utilisateur
        pass

# Création du jeu et de l'interface utilisateur
game = DungeonGame()
app = Application()
app.mainloop()
