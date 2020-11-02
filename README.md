#Scoreboard API

**Get Games**
----
  Sistemdeki aktif oyunları, id'si, ismi, toplam oynanma sayısı ve toplam oynayan özgün kullanıcı sayısını json olarak döndürür.

* **URL**

  /api/get_games

* **Method:**
  
  `GET`

* **Success Response:**

    **Content:** `{ gameID : 1, title:'Game 0', uniqueUsers: 12, totalPlayCount: 25 }`

----
----

**Get Scoreboard**
----
  Belirli bir oyun için sıralamadaki ilk 25 kişiyi artan sıra ile gösterir.

* **URL**

  /api/get_scoreboard/:game_id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `game_id=[integer]`

* **Success Response:**

    **Content:** `[{ gameID : 1, userID : 1, score: 100 }, { gameID : 1, userID : 2, score: 98 }, ...]`
 
* **Error Response:**

    **Content:** `'Aradığınız oyunu bulamadık.'`

----
----

  **Add Score**
----
  Yeni bir skoru sıralamaya ekler. Yanıt olarak, yeni skora sahip kişinin eski sıralamasını, yeni sıralamasını ve geçtiği kullanıcıların id'sini gönderir.

* **URL**

  /api/add_score/

* **Method:**

  `POST`
  
* **Data Params**

   **Required:**
 
   `{ game_id: [integer], user_id: [integer], score: [integer] }`

* **Success Response:**

    **Content:** `{ oldRank: 15, newRank: 10, sweep: [2, 5, 7, 9, 15 ] }`
 
* **Error Response:**

    **Content:** `"Lütfen parametreleri tam giriniz."`

  OR

    **Content:** `"Aradığınız oyun bulunmamaktadır."`

  OR

    **Content:** `"Aradığınız kullanıcı bulunmamaktadır."`



----
----

##Database Diagram

![Database Diagram](/diagram.jpg)