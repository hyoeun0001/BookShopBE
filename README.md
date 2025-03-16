
# BookShop

<div>
  <img width="600" alt="BS_메인화면" src="https://github.com/user-attachments/assets/021c4c08-0535-47ba-b151-456f0da941a4" />
</div>

## 프로젝트 소개
도서 판매 웹 사이트입니다. 
프로젝트 기간	: 2024.5 - 2024.6 1개월 <br>

## 개발 환경

프레임 워크
- Typescript, React
- Zustand, axios
- Java, Spring, MySQL, JWT

## 프로젝트 구조

<details>
  <summary>프론트엔드</summary>
  ```plaintext
  📦src
 ┣ 📂api
 ┃ ┣ 📜auth.api.ts
 ┃ ┣ 📜banner.api.ts
 ┃ ┣ 📜books.api.ts
 ┃ ┣ 📜carts.api.ts
 ┃ ┣ 📜category.api.ts
 ┃ ┣ 📜http.ts
 ┃ ┣ 📜order.api.ts
 ┃ ┣ 📜queryClient.ts
 ┃ ┗ 📜review.api.ts
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┗ 📜logo.png
 ┣ 📂components
 ┃ ┣ 📂book
 ┃ ┃ ┣ 📜AddToCart.tsx
 ┃ ┃ ┣ 📜BookReview.tsx
 ┃ ┃ ┣ 📜BookReviewAdd.tsx
 ┃ ┃ ┣ 📜BookReviewItem.tsx
 ┃ ┃ ┗ 📜LikeButton.tsx
 ┃ ┣ 📂books
 ┃ ┃ ┣ 📜BookBestItem.tsx
 ┃ ┃ ┣ 📜BookItem.spec.tsx
 ┃ ┃ ┣ 📜BookItem.tsx
 ┃ ┃ ┣ 📜BooksEmpty.tsx
 ┃ ┃ ┣ 📜BooksFilter.tsx
 ┃ ┃ ┣ 📜BooksList.tsx
 ┃ ┃ ┣ 📜BooksViewSwitcher.tsx
 ┃ ┃ ┗ 📜Pagination.tsx
 ┃ ┣ 📂cart
 ┃ ┃ ┣ 📜cartItem.tsx
 ┃ ┃ ┣ 📜CartSummary.tsx
 ┃ ┃ ┗ 📜CheckIconButton.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂banner
 ┃ ┃ ┃ ┣ 📜Banner.tsx
 ┃ ┃ ┃ ┗ 📜BannerItem.tsx
 ┃ ┃ ┣ 📂toast
 ┃ ┃ ┃ ┣ 📜Toast.tsx
 ┃ ┃ ┃ ┗ 📜toastContainer.tsx
 ┃ ┃ ┣ 📜Button.spec.tsx
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜Dropdown.tsx
 ┃ ┃ ┣ 📜EllipsisBox.tsx
 ┃ ┃ ┣ 📜Empty.tsx
 ┃ ┃ ┣ 📜Error.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜InputText.spec.tsx
 ┃ ┃ ┣ 📜InputText.tsx
 ┃ ┃ ┣ 📜Loading.tsx
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┣ 📜Sidebar.tsx
 ┃ ┃ ┣ 📜Tabs.tsx
 ┃ ┃ ┣ 📜Title.spec.tsx
 ┃ ┃ ┗ 📜Title.tsx
 ┃ ┣ 📂header
 ┃ ┃ ┗ 📜ThemeSwitcher.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜MainBest.tsx
 ┃ ┃ ┣ 📜MainNewBooks.tsx
 ┃ ┃ ┗ 📜MainReview.tsx
 ┃ ┗ 📂order
 ┃ ┃ ┗ 📜FindAddressButton.tsx
 ┣ 📂constants
 ┃ ┣ 📜pagination.ts
 ┃ ┗ 📜querystring.ts
 ┣ 📂context
 ┃ ┗ 📜themeContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAlert.ts
 ┃ ┣ 📜useAuth.ts
 ┃ ┣ 📜useBook.ts
 ┃ ┣ 📜useBooks.ts
 ┃ ┣ 📜useBooksInfinite.ts
 ┃ ┣ 📜useCart.ts
 ┃ ┣ 📜useCategory.ts
 ┃ ┣ 📜useIntersectionObserver.ts
 ┃ ┣ 📜useMain.ts
 ┃ ┣ 📜useMediaQuery.ts
 ┃ ┣ 📜useOrders.ts
 ┃ ┣ 📜useTimeout.ts
 ┃ ┗ 📜useToast.ts
 ┣ 📂mock
 ┃ ┣ 📜banner.ts
 ┃ ┣ 📜books.ts
 ┃ ┣ 📜browser.ts
 ┃ ┗ 📜review.ts
 ┣ 📂models
 ┃ ┣ 📜banner.model.ts
 ┃ ┣ 📜book.model.ts
 ┃ ┣ 📜cart.model.ts
 ┃ ┣ 📜category.model.ts
 ┃ ┣ 📜order.model.ts
 ┃ ┣ 📜pagination.model.ts
 ┃ ┗ 📜user.model.ts
 ┣ 📂pages
 ┃ ┣ 📜BookDetail.tsx
 ┃ ┣ 📜Books.tsx
 ┃ ┣ 📜Cart.tsx
 ┃ ┣ 📜Detail.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┣ 📜Order.tsx
 ┃ ┣ 📜OrderList.tsx
 ┃ ┣ 📜ResetPassword.tsx
 ┃ ┗ 📜Signup.tsx
 ┣ 📂store
 ┃ ┣ 📜authStore.ts
 ┃ ┗ 📜toastStore.ts
 ┣ 📂style
 ┃ ┣ 📜global.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂utils
 ┃ ┣ 📜format.tsx
 ┃ ┗ 📜image.ts
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┣ 📜setupTests.ts
 ┗ 📜window.d.ts
</details>
<details>
  <summary>백엔드</summary>
  ```plaintext
  📦src
 ┣ 📂main
 ┃ ┣ 📂java
 ┃ ┃ ┗ 📂BS
 ┃ ┃ ┃ ┗ 📂spring_BS
 ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┗ 📜AuthenticationConfig.java
 ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BookController.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CartController.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryController.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜LikeController.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberController.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜OrderController.java
 ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BookDetailDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BooksResponseDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CartItemRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CartItemResponseDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryResponseDTO.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DeliveryDTO.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberResponseDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberSignInRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberSignUpRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜OrderDetailResponseDTO.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜OrderItemDTO.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜OrderRequestDTO.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜OrderResponseDTO.java
 ┃ ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BaseTimeEntity.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Book.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CartItem.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Category.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Delivery.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Like.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Member.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Order.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜OrderedBook.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Role.java
 ┃ ┃ ┃ ┃ ┣ 📂jwt
 ┃ ┃ ┃ ┃ ┃ ┣ 📜JwtFilter.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜JwtUtil.java
 ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BookRepository.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CartItemRepository.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DeliveryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜LikeRepository.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberRepository.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜OrderedBookRepository.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜OrderRepository.java
 ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MemberServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BookService.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CartService.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryService.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜LikeService.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberService.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜OrderService.java
 ┃ ┃ ┃ ┃ ┗ 📜SpringBsApplication.java
 ┃ ┗ 📂resources
 ┃ ┃ ┣ 📂static
 ┃ ┃ ┣ 📂templates
 ┃ ┃ ┗ 📜application.yml
 ┗ 📂test
 ┃ ┗ 📂java
 ┃ ┃ ┗ 📂BS
 ┃ ┃ ┃ ┗ 📂spring_BS
 ┃ ┃ ┃ ┃ ┗ 📜SpringBsApplicationTests.java
</details>

## 화면 및 기능

### 메인 화면 & 로그인 화면
- 메인 화면은 목업 데이터들을 이용해서 여러 디자인을 적용해 두었습니다.
- 로그인 또는 회원가입을 진행할 수 있습니다.<br>
<img width="400" alt="BS_메인화면" src="https://github.com/user-attachments/assets/d3f83654-3989-436c-b906-1159ffba95de" /><img width="400" alt="BS_로그인" src="https://github.com/user-attachments/assets/9ad59e84-bc24-42a7-a8ef-4c9e8bb8af96" /><br>
<img width="400" alt="BS_회원가입" src="https://github.com/user-attachments/assets/98cfaaa7-d25a-428d-b695-51b45dc63c36" />

### 전체 도서 및 개별 도서 페이지
- 전체 도서를 확인할 수 있는 페이지입니다.
- 로그인을 한 후 도서 상세 페이지에 접근이 가능합니다.
- 카테고리별 도서도 확이할 수 있습니다.
- 도서에 좋아요를 누를 수 있고 수량에 맞게 장바구니도 담을 수 있습니다. <br>
<img width="400" alt="BS_전체book" src="https://github.com/user-attachments/assets/532e42bb-12dc-4d66-9feb-c12fcaf834e6" /><img width="400" alt="BS_카테고리별 책" src="https://github.com/user-attachments/assets/25d49bba-8faa-48ce-ad86-e55a3d89149e" /><br>
<img width="400" alt="BS_도서개별조회" src="https://github.com/user-attachments/assets/a367d177-8613-4437-a6e4-c4f0603f416e" /><img width="400" alt="BS_장바구니추가기능" src="https://github.com/user-attachments/assets/c2afa3ef-026f-46a3-85f7-033465752e6f" />

### 장바구니 페이지
- 장바구니에서 담은 도서의 정보를 확인할 수 있습니다.
- 특정 도서를 선택해 주문할 수 있습니다.<br>
<img width="400" alt="BS_장바구니페이지" src="https://github.com/user-attachments/assets/2af65bd6-5a85-4e8d-a19e-79083f23ee2b" />

### 주문서 작성 페이지 및 주문 내역 페이지
- 장바구니에서 주문할 데이터를 선택해서 주문하기를 누르면 이 화면으로 넘어옵니다.
- 원하는 데이터를 넣어주고 결제하기를 누르면 주문이 완료됩니다.<br>
<img width="400" alt="BS_주문서작성페이지" src="https://github.com/user-attachments/assets/dbd29d99-ea39-491e-8000-3388a23b2f85" /><img width="400" alt="BS_주문내역" src="https://github.com/user-attachments/assets/2fb0eda6-ce61-436a-a766-1ef2682f98be" />

