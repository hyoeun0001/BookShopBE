
# 📚 BookShop

<div align="center"> <img width="600" alt="BS_메인화면" src="https://github.com/user-attachments/assets/021c4c08-0535-47ba-b151-456f0da941a4" /> </div>

## 🔹 프로젝트 소개
BookShop은 온라인 도서 판매 웹사이트입니다.
사용자는 도서를 검색하고, 장바구니에 담아 주문할 수 있습니다.<br>

- 개발 기간 : 2024.05 ~ 2024.06 (1개월)
- 주요 기능 : 도서 조회, 카테고리별 필터링, 장바구니, 주문 관리

## 🛠 기술 스택

### Frontend
- Framework : React, TypeScript
- State Management : Zustand
- API 통신 : Axios

### Backend
- Language & Framework : Node.js, Express, MariaDB, JWT
- Database : MySQL
- Auth : JWT

## 📌 시스템 아키텍처
**ERD 설계**
<div align="center"> <img width="600" alt="ERD" src="https://github.com/user-attachments/assets/a935cf33-a1bc-4b3b-a498-08b56d9acf38" /> </div>

**API 설계**
- [BookShop API 문서](https://tame-leo-cff.notion.site/BookShop-API-1b904f52b34180f18a70e5e81756a3a6?pvs=4)
- 예시 사진 

<div align="center"> <img width="402" alt="API 예시" src="https://github.com/user-attachments/assets/0767ab90-ba96-4473-844a-0e0394e2ed8e" /> </div>

## 프로젝트 구조

<details>
  <summary>프론트엔드</summary>

  ```tsx
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
  ```
</details>
<details>
  <summary>백엔드드</summary>

  ```tsx
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
```
</details>

## 화면 및 기능 소개

### 🏠 메인 화면 & 로그인 화면
- **메인 화면**에서는 목업 데이터를 활용해 다양한 디자인을 적용하였습니다.
- 사용자는 **로그인 또는 회원가입**을 진행하여 도서 검색 및 구매 기능을 이용할 수 있습니다.

<div align="center">
  <img width="400" alt="BS_메인화면" src="https://github.com/user-attachments/assets/d3f83654-3989-436c-b906-1159ffba95de" />
  <img width="400" alt="BS_로그인" src="https://github.com/user-attachments/assets/9ad59e84-bc24-42a7-a8ef-4c9e8bb8af96" />
  <img width="400" alt="BS_회원가입" src="https://github.com/user-attachments/assets/98cfaaa7-d25a-428d-b695-51b45dc63c36" />
</div>

---

### 📚 전체 도서 및 개별 도서 페이지
- **전체 도서 목록을 확인할 수 있는 페이지**입니다.
- 사용자는 로그인 후 **도서 상세 페이지**에 접근하여 원하는 도서를 자세히 살펴볼 수 있습니다.
- **카테고리별 도서 필터링 기능**을 제공하여 원하는 분야의 책을 쉽게 찾을 수 있습니다.
- **좋아요(♥) 기능**을 활용해 관심 있는 도서를 저장할 수 있으며, 필요한 수량만큼 장바구니에 담을 수도 있습니다.

<div align="center">
  <img width="400" alt="BS_전체book" src="https://github.com/user-attachments/assets/532e42bb-12dc-4d66-9feb-c12fcaf834e6" />
  <img width="400" alt="BS_카테고리별 책" src="https://github.com/user-attachments/assets/25d49bba-8faa-48ce-ad86-e55a3d89149e" />
  <br>
  <img width="400" alt="BS_도서개별조회" src="https://github.com/user-attachments/assets/a367d177-8613-4437-a6e4-c4f0603f416e" />
  <img width="400" alt="BS_장바구니추가기능" src="https://github.com/user-attachments/assets/c2afa3ef-026f-46a3-85f7-033465752e6f" />
</div>

---

### 🛒 장바구니 페이지
- **장바구니에서 담은 도서 목록 및 개별 도서 정보**를 확인할 수 있습니다.
- 사용자는 **선택한 도서만 주문**할 수도 있으며, 필요 없는 도서는 장바구니에서 삭제할 수 있습니다.

<div align="center">
  <img width="400" alt="BS_장바구니페이지" src="https://github.com/user-attachments/assets/2af65bd6-5a85-4e8d-a19e-79083f23ee2b" />
</div>

---

### 📝 주문서 작성 & 주문 내역 페이지
- 장바구니에서 **주문할 도서를 선택**한 후, 주문하기 버튼을 누르면 주문서 작성 화면으로 이동합니다.
- 주문서에서 **배송 정보 및 결제 정보를 입력**한 후 결제 버튼을 누르면 주문이 완료됩니다.
- 완료된 주문은 **주문 내역 페이지**에서 확인할 수 있으며, 주문 상태도 실시간으로 조회할 수 있습니다.

<div align="center">
  <img width="400" alt="BS_주문서작성페이지" src="https://github.com/user-attachments/assets/dbd29d99-ea39-491e-8000-3388a23b2f85" />
  <img width="400" alt="BS_주문내역" src="https://github.com/user-attachments/assets/2fb0eda6-ce61-436a-a766-1ef2682f98be" />
</div>

### 시연
![ezgif-865eb104bc42ff](https://github.com/user-attachments/assets/35309336-19a3-47db-a8f3-25a58a30ff3b)


