const AsciiArt = () => {

    const artChoises = [
        `
        ███████ ██ ███    ███  ██████  ███    ██     ██     ██ ██ ██      ███    ███  ██████  ████████ ███████ 
        ██      ██ ████  ████ ██    ██ ████   ██     ██     ██ ██ ██      ████  ████ ██    ██    ██    ██      
        ███████ ██ ██ ████ ██ ██    ██ ██ ██  ██     ██  █  ██ ██ ██      ██ ████ ██ ██    ██    ██    ███████ 
             ██ ██ ██  ██  ██ ██    ██ ██  ██ ██     ██ ███ ██ ██ ██      ██  ██  ██ ██    ██    ██         ██ 
        ███████ ██ ██      ██  ██████  ██   ████      ███ ███  ██ ███████ ██      ██  ██████     ██    ███████ 
                                                                                                               
        `,
        `
          ██████  ██▓ ███▄ ▄███▓ ▒█████   ███▄    █     █     █░ ██▓ ██▓     ███▄ ▄███▓ ▒█████  ▄▄▄█████▓  ██████ 
        ▒██    ▒ ▓██▒▓██▒▀█▀ ██▒▒██▒  ██▒ ██ ▀█   █    ▓█░ █ ░█░▓██▒▓██▒    ▓██▒▀█▀ ██▒▒██▒  ██▒▓  ██▒ ▓▒▒██    ▒ 
        ░ ▓██▄   ▒██▒▓██    ▓██░▒██░  ██▒▓██  ▀█ ██▒   ▒█░ █ ░█ ▒██▒▒██░    ▓██    ▓██░▒██░  ██▒▒ ▓██░ ▒░░ ▓██▄   
          ▒   ██▒░██░▒██    ▒██ ▒██   ██░▓██▒  ▐▌██▒   ░█░ █ ░█ ░██░▒██░    ▒██    ▒██ ▒██   ██░░ ▓██▓ ░   ▒   ██▒
        ▒██████▒▒░██░▒██▒   ░██▒░ ████▓▒░▒██░   ▓██░   ░░██▒██▓ ░██░░██████▒▒██▒   ░██▒░ ████▓▒░  ▒██▒ ░ ▒██████▒▒
        ▒ ▒▓▒ ▒ ░░▓  ░ ▒░   ░  ░░ ▒░▒░▒░ ░ ▒░   ▒ ▒    ░ ▓░▒ ▒  ░▓  ░ ▒░▓  ░░ ▒░   ░  ░░ ▒░▒░▒░   ▒ ░░   ▒ ▒▓▒ ▒ ░
        ░ ░▒  ░ ░ ▒ ░░  ░      ░  ░ ▒ ▒░ ░ ░░   ░ ▒░     ▒ ░ ░   ▒ ░░ ░ ▒  ░░  ░      ░  ░ ▒ ▒░     ░    ░ ░▒  ░ ░
        ░  ░  ░   ▒ ░░      ░   ░ ░ ░ ▒     ░   ░ ░      ░   ░   ▒ ░  ░ ░   ░      ░   ░ ░ ░ ▒    ░      ░  ░  ░  
              ░   ░         ░       ░ ░           ░        ░     ░      ░  ░       ░       ░ ░                 ░  
        `,
        `
        ▄████████  ▄█    ▄▄▄▄███▄▄▄▄    ▄██████▄  ███▄▄▄▄         ▄█     █▄   ▄█   ▄█         ▄▄▄▄███▄▄▄▄    ▄██████▄      ███        ▄████████ 
        ███    ███ ███  ▄██▀▀▀███▀▀▀██▄ ███    ███ ███▀▀▀██▄      ███     ███ ███  ███       ▄██▀▀▀███▀▀▀██▄ ███    ███ ▀█████████▄   ███    ███ 
        ███    █▀  ███▌ ███   ███   ███ ███    ███ ███   ███      ███     ███ ███▌ ███       ███   ███   ███ ███    ███    ▀███▀▀██   ███    █▀  
        ███        ███▌ ███   ███   ███ ███    ███ ███   ███      ███     ███ ███▌ ███       ███   ███   ███ ███    ███     ███   ▀   ███        
      ▀███████████ ███▌ ███   ███   ███ ███    ███ ███   ███      ███     ███ ███▌ ███       ███   ███   ███ ███    ███     ███     ▀███████████ 
               ███ ███  ███   ███   ███ ███    ███ ███   ███      ███     ███ ███  ███       ███   ███   ███ ███    ███     ███              ███ 
         ▄█    ███ ███  ███   ███   ███ ███    ███ ███   ███      ███ ▄█▄ ███ ███  ███▌    ▄ ███   ███   ███ ███    ███     ███        ▄█    ███ 
       ▄████████▀  █▀    ▀█   ███   █▀   ▀██████▀   ▀█   █▀        ▀███▀███▀  █▀   █████▄▄██  ▀█   ███   █▀   ▀██████▀     ▄████▀    ▄████████▀  
        `,
        `01010011 01101001 01101101 01101111 01101110  01010111 01101001 01101100 01101101 01101111 01110100 01110011`,
        `83 105 109 111 110  87 105 108 109 111 116 115`,
        `53 69 6D 6F 6E  57 69 6C 6D 6F 74 73`,
        `... .. -- --- -.    .-- .. .-.. -- --- - ...   `,
        `                                                                                                                           
        @@@@@@   @@@  @@@@@@@@@@    @@@@@@   @@@  @@@     @@@  @@@  @@@  @@@  @@@       @@@@@@@@@@    @@@@@@   @@@@@@@   @@@@@@   
       @@@@@@@   @@@  @@@@@@@@@@@  @@@@@@@@  @@@@ @@@     @@@  @@@  @@@  @@@  @@@       @@@@@@@@@@@  @@@@@@@@  @@@@@@@  @@@@@@@   
       !@@       @@!  @@! @@! @@!  @@!  @@@  @@!@!@@@     @@!  @@!  @@!  @@!  @@!       @@! @@! @@!  @@!  @@@    @@!    !@@       
       !@!       !@!  !@! !@! !@!  !@!  @!@  !@!!@!@!     !@!  !@!  !@!  !@!  !@!       !@! !@! !@!  !@!  @!@    !@!    !@!       
       !!@@!!    !!@  @!! !!@ @!@  @!@  !@!  @!@ !!@!     @!!  !!@  @!@  !!@  @!!       @!! !!@ @!@  @!@  !@!    @!!    !!@@!!    
        !!@!!!   !!!  !@!   ! !@!  !@!  !!!  !@!  !!!     !@!  !!!  !@!  !!!  !!!       !@!   ! !@!  !@!  !!!    !!!     !!@!!!   
            !:!  !!:  !!:     !!:  !!:  !!!  !!:  !!!     !!:  !!:  !!:  !!:  !!:       !!:     !!:  !!:  !!!    !!:         !:!  
           !:!   :!:  :!:     :!:  :!:  !:!  :!:  !:!     :!:  :!:  :!:  :!:   :!:      :!:     :!:  :!:  !:!    :!:        !:!   
       :::: ::    ::  :::     ::   ::::: ::   ::   ::      :::: :: :::    ::   :: ::::  :::     ::   ::::: ::     ::    :::: ::   
       :: : :    :     :      :     : :  :   ::    :        :: :  : :    :    : :: : :   :      :     : :  :      :     :: : :    
        `,
    ]

    return ( 
        <div style={{display: "none"}}>
            AsciiArt
            {
                /*console.log("Hello, I'm "),*/
                console.log("%c " + artChoises[Math.floor(Math.random() * artChoises.length)], "color:red;")
            }
        </div>
        
     );
}

export default AsciiArt;