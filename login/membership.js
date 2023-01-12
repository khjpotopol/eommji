
/*01p 전체동의*/
document.addEventListener('DOMContentLoaded', () => {

            const allTerms = document.getElementById('terms_all')
            const terms01 = document.getElementById('terms_01')
            const terms02 = document.getElementById('terms_02')

            allTerms.addEventListener('click', allCheck)
            terms01.addEventListener('click', termsCheck)
            terms02.addEventListener('click', termsCheck)

            function allCheck(){
                if(allTerms.checked){
                    terms01.checked = true
                    terms02.checked = true
                    
                } else {
                    terms01.checked = false
                    terms02.checked = false
                }
            }

            function termsCheck(){
                if(terms01.checked && terms02.checked){
                    allTerms.checked = true
                } else {
                    allTerms.checked = false
                }
            }

        })
        /*01p 전체동의*/

        /*02p 회원가입*/
        
        $(function(){
            let userPw = '';
            let userPwCon = '';

            $('.chk_pw').click(function(){
                let userPw = $('#newPw').val();
                let userPwCon = $('#newPwCon').val();

                if (userPw == userPwCon) {
                    alert('비밀번호가 일치합니다.')
                } else {
                    alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.')
                    $('#newPwCon').val('').focus();
                }
            })
        })

        $(function(){
            $('.btn_submit').click(function(){
                if($('#userName').val() == ""){
                    alert('회원명은 필수 입력사항입니다.');
                    $('#userName').focus();
                    return false;
                }
                if ($('#newId').val() == "") {
                    alert('아이디는 필수 입력사항입니다.');
                    $('#newId').focus();
                    return false;
                }
                if ($('#newPw').val() == "") {
                    alert('비밀번호는 필수 입력사항입니다.');
                    $('#newPw').focus();
                    return false;
                }
                if ($('#newPwCon').val() == "") {
                    alert('비밀번호 확인을 해주세요.');
                    $('#newPwCon').focus();
                    return false;
                }
                if ($('#userPh').val() == "") {
                    alert('휴대전화는 필수 입력사항입니다.');
                    $('#userPh').focus();
                    return false;
                }
                alert('회원가입이 완료 되었습니다.')
                location.href = 'index.html'
            })
        })