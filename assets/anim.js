jQuery(function($) {
    $(document).ready(function() {
        $('#boy').sprite({
            fps:15,
            no_of_frames:8
        });
        $('#test').sprite({
            fps:25,
            no_of_frames:16
        });
        $('#bug').sprite({
            fps:25,
            no_of_frames:16
        });
        $('#infected').sprite({
            fps:16,
            no_of_frames:16
        });
        $('#infected2').sprite({
            fps:16,
            no_of_frames:16
        });
        $('#infected3').sprite({
            fps:16,
            no_of_frames:16
        });
        $('#infected4').sprite({
            fps:16,
            no_of_frames:16
        });
        $('#infected5').sprite({
            fps:16,
            no_of_frames:16
        });
        $('#infected6').sprite({
            fps:16,
            no_of_frames:16
        });
        $('#infected7').sprite({
            fps:16,
            no_of_frames:16
        });
        $('#bug2').sprite({
            fps:25,
            no_of_frames:16
        })
        .spRandom({
          top: 250,
          left: 50,
          right: 800,
          bottom: 250,
          speed: 2500,
          pause: 200
        });
      /* $('#redskull').sprite({
            fps:12,
            no_of_frames:6
        });
       */
        $('#mainbg').pan({
            fps:60,
            speed: 1,
            dir:'left'});

            $('#forebg').pan({
                fps:10,
                speed: 0,
                dir:'right'});

                $('#pillars').pan({
                    fps:60,
                    speed: 10,
                    dir:'left'});

                    $('#veipas').pan({
                        fps:60,
                        speed: 0,
                        dir:'left'})
                        .spRandom({
                          top: 50,
                          left: 0,
                          right: 0,
                          bottom: 100,
                          speed: 1000
                        });
    });
});
