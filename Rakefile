desc "Run SASS watch and start PHP server."
task :dev do
  puts "Watching SASS files for changes and running PHP server on port 8000."
  pids = [
    spawn('sass --watch assets/src/scss:assets/build/css'),
    spawn('php -S localhost:8000'),
  ]
  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end
  loop do
    sleep 1
  end
end