$(function(){
    const id = 'green';
    const pw = '1234';

    let userId = '';
    let userPw = '';

    $('.btn_login').click(function(){
        userId = $('#user_id').val();
        userPw = $('#user_pw').val();

        if(id == userId){
            if(pw == userPw) {
                alert(userId + '님 환영합니다.');
                $('#login_back').click();
            } else {
                alert('비밀번호가 틀렸습니다.');
                $('#user_pw').val('').focus();
            }
        }else {
            alert('아이디가 틀렸습니다');
            $('#user_id').val('').focus();
        }
    })
  })