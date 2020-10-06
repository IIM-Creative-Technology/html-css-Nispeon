<!DOCTYPE html>
<html lang="fr">
    <head>

        <?php include 'head.php' ?>
        <title>Voter !/Votingo</title>
        

    </head>

    <body class="pollBody">
        
        <?php include 'headerNav.php' ?>

        <main>

            <div class="popup">
            
                <div class="popform gone" id="pf">
                    <form>

                    <label>Quel est ton nom ?</label>
                    <input type="text" class="namae" placeholder="Nom..." required>
                    
                    <div type="submit" class="sub">Commencer</div>
                    
                    </form>
                </div>
            
            
            </div>
        
        
        </main>

    <script src="js/pollScript.js"></script>
    </body>
</html>