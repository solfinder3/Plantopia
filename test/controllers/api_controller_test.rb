require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get /" do
    get api_/_url
    assert_response :success
  end

  test "should get specs--skip" do
    get api_specs--skip_url
    assert_response :success
  end

end
