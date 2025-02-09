// 알림 버튼 클릭시 목록 나오기
const announceBtn = document.querySelector('.announce-button-icon')
announceBtn.addEventListener("click", function(e) {
    console.log('dd')
    const container = document.querySelector('.announce-list-container')
    container.classList.toggle('active');
});


// 제목 작성시 남은 글자수 계산
const inputField = document.getElementById('title-input');
const helperMsg = document.querySelector('.helper-msg');

inputField.addEventListener('input', function() {
    console.log('ss')
    const maxLength = 30;
    const remainingChars = maxLength - this.value.length;
    helperMsg.textContent = remainingChars + '자 남음';
});


// document.addEventListener("DOMContentLoaded", function() {
//   var addButton = document.querySelector('.insert-btn');
//   var emailInput = document.querySelector('.input-member-email');
//   var emailList = document.querySelector('.join-member-emails-list');
//
//   addButton.addEventListener('click', function() {
//       var email = emailInput.value.trim(); // 이메일 입력 값 가져오기 및 공백 제거
//
//       if (validateEmail(email)) {
//           addEmailToList(email);
//           emailInput.value = ''; // 입력 필드 초기화
//       } else {
//           var helperMessage = document.querySelector('.helper-message-email');
//           helperMessage.style.display = 'block';
//       }
//   });
//
//   function validateEmail(email) {
//       // 간단한 이메일 유효성 검사를 수행합니다.
//       // 여기서는 간단히 '@' 문자를 포함하는지만을 확인합니다.
//       return email.includes('@');
//   }
//
//   function addEmailToList(email) {
//       var emailBadge = document.createElement('div');
//       emailBadge.classList.add('join-member-emails-badge');
//       emailBadge.innerHTML = `
//           <span>${email}</span>
//           <button type="button" class="join-member-emails-remove-btn">
//               <svg viewBox="0 0 40 40" focusable="false" role="presentation" class="remove-btn-svg" aria-hidden="true">
//                   <path d="M33.4 8L32 6.6l-12 12-12-12L6.6 8l12 12-12 12L8 33.4l12-12 12 12 1.4-1.4-12-12 12-12z"></path>
//               </svg>
//           </button>
//       `;
//       emailList.appendChild(emailBadge);
//       attachRemoveEventHandler(emailBadge); // remove 버튼에 이벤트 핸들러 추가
//   }
//
//   function attachRemoveEventHandler(emailBadge) {
//       var removeButton = emailBadge.querySelector('.join-member-emails-remove-btn');
//       removeButton.addEventListener('click', function() {
//           emailBadge.remove(); // 해당 이메일 요소 제거
//       });
//   }
// });


// 이미지 썸네일
document.addEventListener("DOMContentLoaded", function() {
    const fileDOM = document.querySelector('.file');
    const prevImgField = document.querySelector('.prev-img-field-container');
    const buttonWrapper = document.querySelector('.img-form-field-btn-wrapper');

    fileDOM.addEventListener('change', () => {
        const files = fileDOM.files;

        // 파일의 개수가 4개를 초과하는지 확인
        if (files.length > 4) {
            alert('이미지 파일은 최대 4개까지 업로드할 수 있습니다.');
            fileDOM.value = ''; // 파일 선택 필드 초기화
            return; // 함수 종료
        }

        // 기존에 있는 모든 미리보기 이미지 필드 및 x 버튼 삭제
        prevImgField.innerHTML = '';

        // 파일이 여러 개 업로드되었을 때를 위한 루프
        for (const file of files) {
            const reader = new FileReader();

            reader.onload = ({ target }) => {
                const previewImg = document.createElement('img');
                previewImg.classList.add('preview-img');
                previewImg.src = target.result;
                previewImg.style.width = '100px'; // 이미지의 너비를 100px로 설정
                previewImg.style.height = '100px'; // 이미지의 높이를 100px로 설정

                const closeBtn = document.createElement('button');
                closeBtn.classList.add('close-btn');
                closeBtn.innerHTML = '&times;';
                closeBtn.style.position = 'absolute'; // 절대 위치 설정
                closeBtn.style.top = '0'; // 상단 정렬
                closeBtn.style.right = '0'; // 우측 정렬

                const previewImgField = document.createElement('div');
                previewImgField.classList.add('prev-img-field');
                previewImgField.style.position = 'relative'; // 상대 위치 설정
                previewImgField.appendChild(previewImg);
                previewImgField.appendChild(closeBtn);
                prevImgField.appendChild(previewImgField);

                // x 버튼에 대한 이벤트 리스너 추가
                closeBtn.addEventListener('click', () => {
                    previewImgField.remove(); // 해당 미리보기 이미지 필드 삭제
                    checkImageFields(); // 미리보기 이미지 필드를 확인하여 등록하기 버튼을 다시 표시
                });
            };

            reader.readAsDataURL(file); // 이미지 파일을 읽어들임
        }

        buttonWrapper.style.display = 'none'; // 등록하기 버튼 숨기기
        prevImgField.style.display = 'flex'; // 미리보기 이미지 필드 보이기
        prevImgField.style.flexWrap = 'wrap'; // 이미지가 가로로 넘칠 때 줄 바꿈
        prevImgField.style.width = 'auto'; // 이미지 필드의 너비를 자동으로 조정
        prevImgField.style.alignItems = 'center'; // 이미지를 세로 중앙에 배치
    });

    function checkImageFields() {
        const imageFields = document.querySelectorAll('.prev-img-field');
        if (imageFields.length === 0) {
            buttonWrapper.style.display = 'block'; // 등록하기 버튼 보이기
        }
    }
});

// 상세 내용 글자 수 계산
const textarea = document.querySelector('.content-textarea');
const formFieldHelper = document.querySelector('.form-field-textarea-helper');

textarea.addEventListener('input', function() {
    // textarea에 입력된 글자 수 계산
    const length = textarea.value.length;

    // 최대 글자 수는 2000
    const maxLength = 2000;

    // 남은 글자 수를 계산합니다.
    const remaining = maxLength - length;

    formFieldHelper.textContent = remaining + '자 남음';
});


textarea.addEventListener('focus', function() {
    // textarea가 focus를 받았을 때 border 색을 변경
    textarea.style.borderColor = '#008243';
});

// 문서 전체에 click 이벤트를 추가합니다.
document.addEventListener('click', function(event) {
    // 클릭된 엘리먼트가 textarea가 아닌 경우에만 실행
    if (!event.target.closest('.textarea-input')) {
        // textarea 외부를 클릭했을 때 textarea의 border 색을 변경
        textarea.style.borderColor = '#dde2e6';
    }
});

// const dateChoice = document.getElementById('change-input')
// const dateField = document.querySelector('.ant-picker.date-picker')
// dateChoice.addEventListener('focus', function (e){
//     dateField.style.borderColor =  '#008243'
// })
//
// // 오늘 날짜부터 선택가능
// // 시작날짜(min 속성)
// let sDate = new Date();
// sDate.setDate(sDate.getDate() + 1);     // 시작날짜의 날짜를 +1일
// let minStr = sDate.toISOString().split('T')[0];
// dateChoice.setAttribute("min", minStr)
//
// // 날짜 선택 후, 저장하기 버튼 클릭 시, date타입 유효성 검사
// function validateDateInput() {
//             // 입력된 날짜 값을 가져옵니다.
//             var inputDate = document.getElementById('change-input').value;
//
//             // 정규 표현식을 사용하여 날짜 형식이 올바른지 검사합니다.
//             var regex = /^\d{4}-\d{2}-\d{2}$/;
//             if (!regex.test(inputDate)) {
//                 alert('날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식으로 입력하세요.');
//                 return false;
//             }
//
//             // 입력된 날짜를 변환하여 올바른 형식으로 출력합니다.
//             var formattedDate = inputDate;
//             // 기타 작업을 수행할 수 있습니다.
//
//             // 변환된 날짜를 다시 입력 필드에 설정합니다.
//             document.getElementById('change-input').value = formattedDate;
//
//             return true;
//         }













