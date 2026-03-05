import { Component } from '@angular/core';


@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  // Biến lưu trạng thái ngôn ngữ ('vi' hoặc 'en')
  currentLang: 'vi' | 'en' = 'en';

  // Trạng thái Lightbox
  selectedImage: string | null = null;

  // Từ điển ngôn ngữ
  translations = {
    vi: {
      nav: { about: 'Giới thiệu', skills: 'Kỹ năng', projects: 'Dự án', contact: 'Liên hệ' },
      hero: { status: 'SẴN SÀNG LÀM VIỆC', hello: 'Xin chào, tôi là', btnProject: 'Xem Dự Án' },
      info: { phone: 'Điện thoại', address: 'Địa chỉ', education: 'Học vấn', eduDetail: 'ĐH Công Nghệ Sài Gòn (2021-2025)' },
      skills: { title: 'Chuyên Môn & Kỹ Năng', strength: 'Thế mạnh', backend: 'Lập trình Backend' },
      projects: {
        title: 'Kinh Nghiệm & Dự Án', hrmCat: 'Đồ án Tốt nghiệp & Dự án Công ty', hrmTitle: 'Hệ Thống Quản Lý Nhân Sự (HRM)',
        hrmDesc: 'Giải pháp quản lý nhân sự chuyên sâu được thiết kế riêng cho hệ sinh thái của Hola Group. Hỗ trợ quản lý vận hành sản xuất và tích hợp công nghệ chấm công thông minh qua mã QR Code.',
        demoAcc: 'Tài khoản Demo', role: 'Quyền hạn', account: 'Tài khoản', password: 'Mật khẩu',
        companyProj: 'Dự án Công ty', webGiaReTitle: 'WebGiaRe & Cấu hình Máy chủ', dockerAchieve: 'Thành tựu Docker',
        spaTitle: 'Spa-pet (Đồ án Môn học)', spaDesc: 'Phát triển ứng dụng web Full-stack dành cho dịch vụ chăm sóc thú cưng. Thiết kế và triển khai RESTful APIs bằng Node.js để xử lý logic nghiệp vụ. Xây dựng giao diện tương tác với React.js.',
        internExp: 'Kinh nghiệm thực tế', internTitle: 'Thực tập sinh (4 Tháng) - Hola Group', internDesc: 'Tham gia phát triển, tối ưu hóa và triển khai các dự án web thực tế của công ty. Điều phối hoạt động của máy chủ, giải quyết các vấn đề liên quan đến hosting và quản lý cơ sở hạ tầng mạng cơ bản.'
      },
      footer: { title: 'Sẵn sàng hợp tác?', desc: 'Tôi luôn tìm kiếm những cơ hội mới để học hỏi và đóng góp kỹ năng của mình vào các dự án thách thức. Hãy liên hệ với tôi!', email: 'Gửi Email' }
    },
    en: {
      nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
      hero: { status: 'OPEN TO WORK', hello: 'Hello, I am', btnProject: 'View Projects' },
      info: { phone: 'Phone', address: 'Address', education: 'Education', eduDetail: 'Saigon Technology University (2021-2025)' },
      skills: { title: 'Expertise & Skills', strength: 'Core Strength', backend: 'Backend Development' },
      projects: {
        title: 'Experience & Projects', hrmCat: 'Graduation & Company Project', hrmTitle: 'Human Resources Management (HRM)',
        hrmDesc: 'A comprehensive HR management solution designed specifically for the Hola Group ecosystem. Supports production operations management and integrates smart attendance via QR Code.',
        demoAcc: 'Demo Accounts', role: 'Role', account: 'Account', password: 'Password',
        companyProj: 'Company Project', webGiaReTitle: 'WebGiaRe & Server Config', dockerAchieve: 'Docker Achievement',
        spaTitle: 'Spa-pet (Course Project)', spaDesc: 'Developed a Full-stack web application for pet care services. Designed and implemented RESTful APIs using Node.js for business logic. Built interactive UI with React.js.',
        internExp: 'Practical Experience', internTitle: 'Intern (4 Months) - Hola Group', internDesc: 'Participated in developing, optimizing, and deploying real-world company web projects. Coordinated server operations, resolved hosting issues, and managed basic network infrastructure.'
      },
      footer: { title: 'Ready to collaborate?', desc: "I'm always looking for new opportunities to learn and contribute my skills to challenging projects. Let's get in touch!", email: 'Send Email' }
    }
  };

  // Getter rút gọn để gọi trong HTML: t.nav.about
  get t() {
    return this.translations[this.currentLang];
  }

  // Hàm chuyển đổi ngôn ngữ
  toggleLanguage() {
    this.currentLang = this.currentLang === 'vi' ? 'en' : 'vi';
  }

  // Hàm mở Modal
  openLightbox(imageUrl: string) {
    this.selectedImage = imageUrl;
    document.body.style.overflow = 'hidden';
  }

  // Hàm đóng Modal
  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }
}