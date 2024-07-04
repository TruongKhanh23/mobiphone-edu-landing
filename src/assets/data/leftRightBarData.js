import phone from "@/assets/icon/home/phone.svg";
import document from "@/assets/icon/home/document.svg";
import universe from "@/assets/icon/home/universe.svg";
import book from "@/assets/icon/home/book.svg";
import phoneContact from "@/assets/icon/home/phone-contact.svg";

import email from "@/assets/icon/home/email.svg";
import website from "@/assets/icon/home/website.svg";
import fanpage from "@/assets/icon/home/fanpage.svg";

import woman from "@/assets/icon/home/woman.svg";
import man from "@/assets/icon/home/man.svg";
import student from "@/assets/icon/home/student.svg";
import head from "@/assets/icon/home/head.svg";

import personalize from "@/assets/icon/home/personalize.svg";
import evaluate from "@/assets/icon/home/evaluate.svg";
import interact from "@/assets/icon/home/interact.svg";
import manage from "@/assets/icon/home/manage.svg";
import access from "@/assets/icon/home/access.svg";

export const leftRightBarData = [
  {
    id: "gioi-thieu-chung",
    title: "GIỚI THIỆU CHUNG",
    description: [
      "Bộ giải pháp Quản lí E-learning của mobiEdu là hệ sinh thái các giải pháp giáo dục quản lí chất lượng và hỗ trợ giáo viên, học sinh, nhà trường, sở - ban - ngành trong quá trình dạy và học.",
      "E-learning của mobiEdu hoạt động theo mô hình phần mềm dịch vụ (SaaS) trên nền tảng điện toán đám mây, cho phép người dùng truy cập và sử dụng học liệu số không giới hạn, không phụ thuộc vào thời gian và địa điểm.",
      "\n \nGiải pháp sử dụng dữ liệu lớn (big data) và học máy để theo dõi và phân tích hành vi học tập của học sinh. Giáo viên, nhà trường có thể quản lí chất lượng giáo dục dễ dàng và tối ưu các bước trong quá trình dạy và học. Bên cạnh đó, bộ giải pháp giúp đồng bộ dữ liệu giữa tất cả các cấp trong ngành giáo dục.",
    ],
  },
  {
    id: "chuc-nang",
    title: "CHỨC NĂNG",
    description: [
      { icon: phone, text: "Quản lí, tra cứu tài liệu học tập" },
      { icon: document, text: "Theo dõi tiến độ và kế hoạch" },
      { icon: universe, text: "Quản lí học tập và giảng dạy" },
      { icon: book, text: "Học và ôn luyện thần tốc" },
      { icon: phoneContact, text: "Báo cáo và liên lạc" },
    ],
  },
  {
    id: "loi-ich",
    title: "LỢI ÍCH",
    description: [
      {
        icon: access,
        positionIcon: "left",
        text: "Truy cập dễ dàng và toàn diện \n vào nội dung học tập",
      },
      {
        icon: interact,
        positionIcon: "right",
        text: "Tương tác và giao tiếp thuận tiện \n giữa nhà trường - giáo viên - học sinh",
      },
      {
        icon: manage,
        positionIcon: "left",
        text: "Quản lí dữ liệu học tập \n và theo dõi tiến độ học tập",
      },
      {
        icon: personalize,
        positionIcon: "right",
        text: "Cá nhân hoá lộ trình học tập",
      },
      {
        icon: evaluate,
        positionIcon: "left",
        text: "Hỗ trợ quản lí và đánh giá \n hiệu suất hệ thống giáo dục",
      },
    ],
  },
  {
    id: "doi-tuong",
    title: "ĐỐI TƯỢNG",
    description: [
      { icon: woman, text: "Cán bộ các sở - ban - ngành" },
      { icon: man, text: "Cán bộ quản lí của nhà trường" },
      {
        icon: head,
        text: "Thầy/cô giáo, cán bộ giảng dạy trong nhà trường",
      },
      { icon: student, text: "Học sinh trong nhà trường" },
    ],
  },
  {
    id: "lien-he",
    title: "LIÊN HỆ",
    description: [
      { icon: email, text: "Email \n contact@mobiedu.vn" },
      { icon: website, text: "Website \n http://mobiedu.vn" },
      {
        icon: fanpage,
        text: "Fanpage \n http://www.facebook.com/ \n mobiedu.vn",
      },
    ],
  },
];
