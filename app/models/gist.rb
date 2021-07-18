class Gist < ApplicationRecord
  belongs_to :user
  belongs_to :question

  validates :url, presence: true
end

'minutes = test_passage.test.time 
seconds = 0
if seconds == 0
  minutes -= 1
  seconds = 59
else  
  seconds -= 1
end
display_time = "#{minutes}:#{seconds}"'