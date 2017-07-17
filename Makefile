#Makefile

NAME=/var/www/project/

work:

	vagrant up
	tmux split-window -l 10 'vagrant ssh -- -t "cd ${NAME}/tests/; /bin/bash"'
	tmux split-window -h 'vagrant ssh -- -t "cd ${NAME}; npm start; /bin/bash"'
	tmux split-window 'vagrant ssh -- -t "cd ${NAME}; xvfb-run selenium-standalone start"'
	tmux select-pane -t 0
	nvim

