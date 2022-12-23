import random

def gender():
    return random.choice(['M', 'F'])


def stat():
    return int(random.gauss(11, 4))


def age():
    return int(random.gauss(35, 14))


def hair(gender):
    if gender == 'M':
        colors = ['Red', 'Brown', 'Blond', 'Bald', 'Black', 'Gray', 'White']
    else:
        colors = ['Red', 'Brunette', 'Blonde', 'Black', 'Gray', 'White', 'Platinum', 'Strawberry']
    return random.choice(colors)


def eyes():
    return random.choice(['Brown', 'Blue', 'Green', 'Hazel', 'Gray', 'Red'])


def firstName(gender):
    if gender == 'F':
        names = ["Essyk", "Shyonmos", "Erild", "Ineeaw", "Kimr",
                "Livkel", "Loriro", "Vesina", "Echd", "Broia",
                "Irurn", "Kalenth", "Chyrad", "Hyzih", "Emora",
                "Niang", "Tyineeng", "Rayiss", "Endasi",
                "Chraesslye", "Em'nya", "Leah", "Stephanie",
                "Brittany", "Jada", "Maya", "Kayla", "Julie",
                "Lauren", "Heather", "Mikayla",]
    else:
        names = ["Usket", "Soodas", "Loold", "Rothan", "Torathlor", "Samkel",
                "Er'more", "Ineageo", "Ser'und", "Warnale", "Blytiakel",
                "Adov", "Nystas", "Sm'chaos", "Mossam", "Oldk", "Sotroth",
                "Aten", "Elmtailer", "Yerorach", "Aughlage", "Engmor", "Bryan",
                "Martin", "Collin", "Cody", "Billy", "Ezra", "Taylor", "Jared",
                "William", "Therm"]
    return random.choice(names)


def lastName():
    return random.choice(
            ["Snookiemunch", "Clowncuddle", "Moopieloaf", "Wipemoopie", "Wunnyhead",
                "Knockermooglie", "Doltsmooch", "Pookiehead", "Twerpwunny", "Dippoofie",
                "Woogynit", "Dorkcutie", "Wooglelunk", "Doodlepin", "Bumblehoney",
                "Dumbwookum", "Schnooglewad", "Smooshbumble", "Clotkissie", "Kissieknuckle",
                "Loveynit", "Dipwookie", "Gooblemunch", "Snuggydolt", "Nitwuddly", "Beefbaby",
                "Clodcuddly", "Nitwuddly", "Scissorpunch",])

def race():
    return random.choice(['Human', 'Elven', 'Dwarven', 'Orcish', 'Entish', 'Fay', 'Hobbit'])


def height():
    inches = int(random.gauss(60, 20))
    feet = inches // 12
    inches = inches % 12
    return f"{feet}'{inches}\""
