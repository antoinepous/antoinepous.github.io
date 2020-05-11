# -*- coding: utf8 -*-
# ____________________________________________________________
# Name: 		Calcul des valeurs de diaph
# Version prgm:	1.81
# Author:		Antoine Pous
# Created:		23/04/2020
# ____________________________________________________________

__version__ = 1.81

from math import *
import tkinter as tk
import tkinter.font as tkFont
import json

window = tk.Tk()
window.title("Photometric database 1.81")
window.geometry("500x850")
window.iconphoto(False, tk.PhotoImage(file='idea.png'))
window.config(background="#5E8295")
window.minsize(500, 850)



frame_1 = tk.Frame(window, background="#5E8295")

frame_1_1 = tk.Frame(frame_1, background="#5E8295")

frame_1_2 = tk.Frame(frame_1, background="#5E8295")

frame_1_3 = tk.Frame(frame_1, background="#5E8295")

frame_2 = tk.Frame(window, background="#5E8295", borderwidth=0, highlightcolor="white",
                    highlightthickness=1)

frame_3 = tk.Frame(window, background="#5E8295")

### FONT ###

font_ips = tkFont.Font(family="Helvetica", size=16)
font_calculer = tkFont.Font(family="Helvetica", size=16)
font_titre = tkFont.Font(family="Helvetica", size=22, weight="bold")
font_soustitre = tkFont.Font(family="Helvetica", size=16)
font_listbox = tkFont.Font(family="Helvetica", size=16)

### IMPORT DATA FILES ###

# modif OF 2020-05-10
with open('data.json', 'r') as rf:
    data_proj = json.load(rf)

'''
with open('data_HMI.json', 'r') as rf:
    data_HMI = json.load(rf)


with open('data_LED.json', 'r') as rf:
    data_LED = json.load(rf)

with open('data_TH.json', 'r') as rf:
    data_TH = json.load(rf)

with open('data_FLUO.json', 'r') as rf:
    data_FLUO = json.load(rf)
'''
# fin modif

# modif OF 2020-05-10
'''
def update_label():
    value = listbox_source.get("active")
'''

def update_label(value):

    global label_t

    # modif OF 2020-05-10
    for type_proj in data_proj:
        if value in data_proj[type_proj]:
            lux_1m = data_proj[type_proj][value]
            break

    '''
    if value in data_HMI:
        lux_1m = data_HMI[value]

    elif value in data_TH:
        lux_1m = data_TH[value]

    elif value in data_LED:
        lux_1m = data_LED[value]

    elif value in data_FLUO:
        lux_1m = data_FLUO[value]
    '''
    # fin modif

    fps = int(saisie_ips.get())
    iso = int(saisie_iso.get())

    e1 = lux_1m * (1 ** 2)
    e2 = round(e1 / 4)
    e3 = round(e1 / 9)
    e4 = round(e1 / (4 ** 2))
    e5 = round(e1 / 25)
    e10 = round(e1 / 100)
    e20 = round(e1 / (20 ** 2))
    e50 = round(e1 / (50 ** 2))

    val = []
    app = []
    dis = [1, 2, 3, 4, 5, 10, 20, 50]
    lux = [e1, e2, e3, e4, e5, e10, e20, e50]
    t = 1 / (fps * 2)
    for valeur_lux in lux:
        n = sqrt(valeur_lux * t * (iso/ 270))
        val.append(round(n, 1))

    all_diaph = [0.0, 0.3, 0.5, 0.7, 1.0, 1.1, 1.2, 1.4, 1.6, 1.7, 1.8,
                 2.0, 2.2, 2.4, 2.5, 2.8, 3.2, 3.3, 3.5, 4.0, 4.5, 4.8,
                 5.0, 5.6, 6.3, 6.7, 7.1, 8.0, 9.0, 9.5, 10.0, 11.0, 13.0,
                 14.0, 16.0, 18.0, 19.0, 20.0, 22.0, 25.3, 27.0, 28.7,
                 32.0, 38.5, 45.0, 54.5, 64.0]

    for i in val:

        if i in all_diaph:
            app.append(i)

        elif i > 64.0:
            app.append("surex")

        else:
            j = 0
            while j + 1 < len(all_diaph):
                if all_diaph[j] < i < all_diaph[j + 1]:
                    m = ((all_diaph[j] + all_diaph[j + 1]) / 2)
                    if i <= m:
                        app.append(all_diaph[j])
                    elif i > m:
                        app.append(all_diaph[j + 1])
                    break
                else:
                    j = j + 1

    conv = {0.0: "0",
            1.0: "1",
            1.4: "1.4",
            2.0: "2",
            2.8: "2.8",
            4.0: "4",
            5.6: "5.6",
            8.0: "8",
            11.0: "11",
            16.0: "16",
            22.0: "22",
            32.0: "32",
            45.0: "45",
            64.0: "64",
            "surex": "surex",

            0.5: "0 + 1/2",
            1.2: "1 + 1/2",
            1.7: "1.4 + 1/2",
            2.4: "2 + 1/2",
            3.3: "2.8 + 1/2",
            4.8: "4 + 1/2",
            6.7: "5.6 + 1/2",
            9.5: "8 + 1/2",
            19.0: "16 + 1/2",
            27.0: "22 + 1/2",
            38.5: "32 + 1/2",
            54.5: "45 + 1/2",

            0.3: "0 + 1/3",
            1.1: "1 + 1/3",
            1.6: "1.4 + 1/3",
            2.2: "2 + 1/3",
            3.2: "2.8 + 1/3",
            4.5: "4 + 1/3",
            6.3: "5.6 + 1/3",
            9.0: "8 + 1/3",
            13.0: "11 + 1/3",
            18.0: "16 + 1/3",
            25.3: "22 + 1/3",

            0.7: "1 - 1/3",
            1.8: "2 - 1/3",
            2.5: "2.8 - 1/3",
            3.5: "4 - 1/3",
            5.0: "5.6 - 1/3",
            7.1: "8 - 1/3",
            10.0: "11 - 1/3",
            14.0: "16 - 1/3",
            20.0: "22 - 1/3",
            28.7: "32 - 1/3",
            }

    h = 0
    for label in frame_2.grid_slaves():
        label.destroy()

    for i in dis:
        fff = i, "m"
        label_d = tk.Label(frame_2, text=fff, font=("Helvetica", 20), bg="#5E8295",
                            fg="white")
        label_d.grid(row=h, column=0, pady=0, padx=5, sticky="e")
        h = h+1
    h = 0
    for i in lux:
        ecl = i, "lux"
        label_e = tk.Label(frame_2, text=ecl, font=("Helvetica", 20), bg="#5E8295",
                            fg="white")
        label_e.grid(row=h, column=1, pady=0, padx=5, sticky="e")
        h = h+1
    h = 0
    for i in app:
        k = conv[i]
        label_t = tk.Label(frame_2, text=k, font=("Helvetica", 20), bg="#5E8295",
                            fg="white")
        label_t.grid(row=h, column=2, pady=0, padx=5)
        h = h+1


label_title = tk.Label(frame_1, text="PHOTOMETRIC DATABASE 1.81", font=font_titre,
                        bg="#5E8295", fg="white")

label_title.pack(pady=15)



label_3 = tk.Label(frame_1_1, text="FPS :", font=font_soustitre, bg="#5E8295",
                    fg="white")

label_3.pack(pady=0,padx=50, side="left", expand="1")

label_iso = tk.Label(frame_1_1, text="ISO :", font=font_soustitre, bg="#5E8295",
                    fg="white")

label_iso.pack(pady=0, padx=50, side="right", expand="1")

saisie_ips = tk.Entry(frame_1_2, width=10, fg="#313131", borderwidth=0,
                        insertborderwidth=0, font=font_ips, highlightthickness=0)

saisie_ips.pack(pady=10,padx=30, side="left", expand="1")
saisie_ips.insert(0,"24")

saisie_iso = tk.Entry(frame_1_2, width=10, fg="#313131", borderwidth=0,
                        insertborderwidth=0, font=font_ips, highlightthickness=0)

saisie_iso.pack(pady=10, padx=30, side="right", expand="1")
saisie_iso.insert(0,"800")


yDefilB = tk.Scrollbar(frame_1_3, orient="vertical")


listbox_source = tk.Listbox(frame_1_3, bd=5, width=35, relief="flat", font=font_listbox,
                            selectmode="single", highlightthickness=0, activestyle="none",
                            selectbackground="#5E8295", selectforeground="white",
                            yscrollcommand=yDefilB.set, fg="#313131")

yDefilB["command"] = listbox_source.yview


# modif OF 2020-05-10
def onselect(evt):
    # Note here that Tkinter passes an event object to onselect()
    w = evt.widget
    index = int(w.curselection()[0])
    value = w.get(index)
    print('You selected item %d: "%s"' % (index, value))
    if value not in data_proj.keys():
        update_label(value)

listbox_source.bind('<<ListboxSelect>>', onselect)
# fin modif


### AFFICHAGE LISTE ###
# modif OF
for type_proj in data_proj:
    listbox_source.insert("end", type_proj)
    for modele in data_proj[type_proj]:
        listbox_source.insert("end", modele)

'''
listbox_source.insert(0, "HMI")

for y in data_HMI:
    listbox_source.insert("end", y)

listbox_source.insert("end", "TUNGSTEN")

for y in data_TH:
    listbox_source.insert("end", y)

listbox_source.insert("end", "LED")

for y in data_LED:
    listbox_source.insert("end", y)

listbox_source.insert("end", "FLUO")

for y in data_FLUO:
    listbox_source.insert("end", y)
'''
# fin modif OF

listbox_source.pack(side="left", expand="1", fill="x", pady=10)
yDefilB.pack(side="right", expand="1", fill="y", pady=10)



calculer = tk.Button(frame_1, text="calculer", highlightcolor="#000000",
                    activeforeground="#FFFFFF", highlightthickness=0, width=10,
                    command=update_label, borderwidth=0, font=font_calculer,
                    fg="#5E8295")

calculer.pack(pady=(15, 0), side="bottom")

copyright = tk.Label(frame_3, text="© 2020 - Antoine Pous", font=("Helvetica", 12),
                      bg="#5E8295", fg="white")
copyright.pack()

frame_1.pack()
frame_1_1.pack(expand="1")
frame_1_2.pack()
frame_1_3.pack()
frame_2.pack(pady=10, padx=25, expand="1")
frame_3.pack(side="bottom")


window.mainloop()
