(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{326:function(n,h,t){"use strict";t.r(h);var c=t(2),i=Object(c.a)({},function(){var n=this,h=n.$createElement,t=n._self._c||h;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"huong-dan-cau-hinh-v2ray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#huong-dan-cau-hinh-v2ray","aria-hidden":"true"}},[n._v("#")]),n._v(" Hướng dẫn cấu hình V2Ray")]),n._v(" "),t("h2",{attrs:{id:"khuoc-tu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#khuoc-tu","aria-hidden":"true"}},[n._v("#")]),n._v(" Khước từ")]),n._v(" "),t("p",[n._v("Kho lưu trữ này là một nhánh của "),t("code",[n._v("ToutyRater / v2ray-guide")]),n._v(", cảm ơn bạn đã giúp nhiều người vượt qua GFW.")]),n._v(" "),t("p",[n._v("Vì chúng tôi muốn làm cho [hướng dẫn ban đầu của V2Ray] (https://github.com/ToutyRater/v2ray-guide) được duy trì tốt hơn và cập nhật hơn, cũng như đa ngôn ngữ, chúng tôi đã chia sẻ kho lưu trữ mới này . Bạn được hoan nghênh đóng góp kinh nghiệm, dịch thuật và chỉnh sửa tài liệu này bằng cách mở một vấn đề. Ngoài ra, nếu bạn muốn giúp chúng tôi đọc lại bản dịch này, xin đừng ngần ngại mở một vấn đề.")]),n._v(" "),t("p",[n._v("Các tài liệu hiện được cấp phép theo [BY-CC 4.0] ("),t("code",[n._v("LICENSE.md")]),n._v(").")]),n._v(" "),t("h2",{attrs:{id:"gioi-thieu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gioi-thieu","aria-hidden":"true"}},[n._v("#")]),n._v(" Giới thiệu")]),n._v(" "),t("p",[n._v("V2Ray là một công cụ thuộc Project V. Project V là một dự án bao gồm một bộ công cụ để xây dựng các môi trường mạng cụ thể và V2Ray là công cụ cốt lõi. Hướng dẫn Project V cho biết "),t("code",[n._v("Project V là một bộ công cụ giúp bạn xây dựng mạng riêng tư của mình qua internet. Cốt lõi của Project V, được đặt tên là V2Ray, chịu trách nhiệm về các giao thức và truyền thông mạng. Nó có thể hoạt động độc lập, cũng như kết hợp với các công cụ khác.")]),n._v(" Tuy nhiên, về thời gian khởi chạy, Project V được ưu tiên hơn V2Ray. Nếu bạn vẫn không hiểu, thì chúng tôi chỉ đơn giản nói, V2Ray là một phần mềm proxy tương tự như Shadowsocks. V2Ray có thể được sử dụng để truy cập internet (qua kiểm duyệt) để tìm hiểu khoa học và công nghệ tiên tiến từ internet miễn phí.")]),n._v(" "),t("p",[n._v("Hướng dẫn sử dụng V2Ray:")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.v2ray.com",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.v2ray.com"),t("OutboundLink")],1),n._v(" (Has been blocked in China)")]),n._v(" "),t("li",[t("a",{attrs:{href:"https://v2fly.org",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://v2fly.org"),t("OutboundLink")],1)])]),n._v(" "),t("p",[n._v("Địa chỉ kho lưu trữ V2Ray: [https://github.com/v2ray/v2ray-core[(https://github.com/v2ray/v2ray-core) Địa chỉ kho lưu trữ V2Ray (kho lưu trữ V2Fly): [https://github.com /v2ray/v2ray-core[(https://github.com/v2fly/v2ray-core)")]),n._v(" "),t("p",[n._v("Nhóm thảo luận người dùng V2Ray Telegram: [https://t.me/projectv2ray[(https://t.me/v2fly_chat)")]),n._v(" "),t("h2",{attrs:{id:"cau-hoi-thuong-gap-hoi-dap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cau-hoi-thuong-gap-hoi-dap","aria-hidden":"true"}},[n._v("#")]),n._v(" Câu hỏi thường gặp: Hỏi & Đáp")]),n._v(" "),t("h4",{attrs:{id:"su-khac-biet-giua-v2ray-va-shadowsocks-la-gi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#su-khac-biet-giua-v2ray-va-shadowsocks-la-gi","aria-hidden":"true"}},[n._v("#")]),n._v(" Sự khác biệt giữa V2Ray và Shadowsocks là gì?")]),n._v(" "),t("p",[n._v("Sự khác biệt vẫn là Shadowsocks chỉ là một công cụ proxy đơn giản; nó là một giao thức mã hóa. Tuy nhiên, V2Ray được thiết kế như một nền tảng và bất kỳ nhà phát triển nào cũng có thể sử dụng các mô-đun được cung cấp bởi V2Ray để phát triển phần mềm proxy mới.")]),n._v(" "),t("p",[n._v("Bất cứ ai quen thuộc với lịch sử của Shadowsocks đều nên biết rằng đây là một phần mềm tự sử dụng được phát triển bởi clowwindy. Mục đích ban đầu của sự phát triển là làm cho nó dễ dàng và hiệu quả để vượt qua tường lửa và kiểm duyệt. Trước khi clowwindy thực hiện mã nguồn mở Shadowsocks, nó đã được sử dụng như một giao thức proxy riêng trong một thời gian dài. Trong khi V2Ray được phát triển sau khi clowwindy nhận được mối đe dọa từ chính phủ Trung Quốc, nhóm Project V đã phát triển như một cuộc biểu tình.")]),n._v(" "),t("p",[n._v("Do nền tảng lịch sử khác nhau khi sinh, chúng có những đặc điểm khác nhau.")]),n._v(" "),t("p",[n._v("Nói một cách đơn giản, Shadowsocks là một giao thức proxy đơn và V2Ray phức tạp hơn một proxy giao thức đơn. Nghe có vẻ hơi ảm đạm với Shadowsocks? Tất nhiên là không! Từ quan điểm khác, Shadowsocks dễ triển khai và V2Ray có cấu hình phức tạp hơn trong khi triển khai.")]),n._v(" "),t("h4",{attrs:{id:"vi-v2ray-phuc-tap-hon-tai-sao-chung-toi-su-dung-no"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vi-v2ray-phuc-tap-hon-tai-sao-chung-toi-su-dung-no","aria-hidden":"true"}},[n._v("#")]),n._v(" Vì V2Ray phức tạp hơn, tại sao chúng tôi sử dụng nó?")]),n._v(" "),t("p",[n._v("Những lợi thế và bất lợi của một cái gì đó luôn luôn đi cùng. Chẳng hạn, V2Ray có những ưu điểm sau:")]),n._v(" "),t("ul",[t("li",[n._v("** Giao thức mới và mạnh mẽ: ** V2Ray sử dụng giao thức VMess tự phát triển mới, giúp cải thiện một số thiếu sót hiện có của Shadowsocks và khó phát hiện hơn bởi tường lửa.")]),n._v(" "),t("li",[n._v("** Hiệu suất tốt hơn: ** Hiệu suất mạng tốt hơn, có thể xem dữ liệu cụ thể [Blog chính thức của V2Ray] (https://steemit.com/cn/@v2ray/3cjiux)")]),n._v(" "),t("li",[n._v("** Các tính năng khác: ** Sau đây là một số tính năng của V2Ray:\n"),t("ul",[t("li",[n._v("mKCP: Triển khai giao thức KCP trên V2Ray, bạn không cần phải cài đặt một kcptun khác.")]),n._v(" "),t("li",[n._v("Cổng động: thay đổi linh hoạt cổng giao tiếp để chống lại giới hạn tốc độ của cổng giao thông lớn dài hạn")]),n._v(" "),t("li",[n._v("Các tính năng định tuyến: bạn có thể tự do đặt hướng luồng của gói dữ liệu đã chỉ định, để chặn quảng cáo và bật tính năng chống theo dõi")]),n._v(" "),t("li",[n._v("Proxy ngoài, hay còn gọi là proxy chuỗi, sử dụng nhiều liên kết để bảo mật tốt hơn")]),n._v(" "),t("li",[n._v("Obfuscation: tương tự như obfuscation của ShadowsocksR, và gói dữ liệu cho mKCP cũng có thể bị xáo trộn. Làm xáo trộn các gói lưu lượng giao thông khác, làm cho việc kiểm tra trở nên khó khăn hơn")]),n._v(" "),t("li",[n._v("Giao thức WebSocket: Chỉ sử dụng proxy WebSocket hoặc cho proxy trung gian CDN (chống chặn tốt hơn)")]),n._v(" "),t("li",[n._v("Mux: Ghép kênh, cải thiện hơn nữa hiệu năng đồng thời của proxy")])])])]),n._v(" "),t("h4",{attrs:{id:"khong-co-vien-dan-bac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#khong-co-vien-dan-bac","aria-hidden":"true"}},[n._v("#")]),n._v(" Không có viên đạn bạc")]),n._v(" "),t("p",[n._v("Hiện tại, V2Ray có những nhược điểm sau:")]),n._v(" "),t("ul",[t("li",[n._v("Cấu hình phức tạp")]),n._v(" "),t("li",[n._v("Thiếu khách hàng và dịch vụ của bên thứ 3")])]),n._v(" "),t("h4",{attrs:{id:"co-ve-nhu-v2ray-tot-nhung-toi-chi-muon-vuot-qua-kiem-duyet-internet-khong-muon-lang-phi-thoi-gian-qua-lau-lam-the-nao-toi-co-the-lam-duoc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#co-ve-nhu-v2ray-tot-nhung-toi-chi-muon-vuot-qua-kiem-duyet-internet-khong-muon-lang-phi-thoi-gian-qua-lau-lam-the-nao-toi-co-the-lam-duoc","aria-hidden":"true"}},[n._v("#")]),n._v(" Có vẻ như V2Ray tốt, nhưng tôi chỉ muốn vượt qua kiểm duyệt internet, không muốn lãng phí thời gian quá lâu. Làm thế nào tôi có thể làm được?")]),n._v(" "),t("p",[n._v("Bất kể bạn làm gì, có một nỗ lực. Nỗ lực không có nghĩa là thành công, nhưng không có nỗ lực chắc chắn đề nghị không có lợi. Nhưng nếu yêu cầu của bạn tương đối đơn giản, bạn có thể tìm thấy VPN thay vì triển khai V2Ray là chính mình.")]),n._v(" "),t("h4",{attrs:{id:"toi-da-quyet-dinh-thu-trien-khai-v2ray-vay-lam-the-nao-toi-co-the-lam-theo-huong-dan-nay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#toi-da-quyet-dinh-thu-trien-khai-v2ray-vay-lam-the-nao-toi-co-the-lam-theo-huong-dan-nay","aria-hidden":"true"}},[n._v("#")]),n._v(" Tôi đã quyết định thử triển khai V2Ray, vậy làm thế nào tôi có thể làm theo hướng dẫn này?")]),n._v(" "),t("p",[n._v("Hướng dẫn sử dụng của V2Ray giải thích mọi thứ rất chi tiết. Hướng dẫn này chủ yếu giải thích các tính năng của V2Ray từ dễ đến khó trong các cấu hình thực tế có sẵn và cố gắng giảm bớt khó khăn cho người mới sử dụng V2Ray.")]),n._v(" "),t("p",[n._v("** Người dùng của hướng dẫn này nên có một số trải nghiệm về vỏ Linux, như cách mua VPS, cách đăng nhập vào VPS bằng SSH, cách sử dụng nano (hoặc vim) để chỉnh sửa văn bản và một số lệnh Linux cơ bản. Có rất nhiều hướng dẫn trực tuyến. Không cần phải lặp lại chúng và viết một hướng dẫn. Nếu bạn không có bất kỳ kinh nghiệm nào, bạn được khuyến khích rằng bạn nên tìm hiểu chúng trước, sau đó triển khai V2Ray. **")]),n._v(" "),t("p",[n._v("Hướng dẫn này có thể được xem là một phiên bản đơn giản của hướng dẫn sử dụng V2Ray hoặc là một hướng dẫn thực tế cho V2Ray.")]),n._v(" "),t("p",[n._v("Bạn có thể làm theo các hướng dẫn trong hướng dẫn này để xây dựng V2Ray mà không cần đọc hướng dẫn sử dụng này, nhưng chúng tôi không khuyến nghị điều đó. Bởi vì hướng dẫn này chỉ để hướng dẫn bạn cách định cấu hình V2Ray. Có một số phím tắt nhất định so với hướng dẫn sử dụng, và một cái gì đó bị bỏ qua. Vì vậy, chúng tôi hy vọng mọi người dành để đọc hướng dẫn sử dụng V2Ray.")]),n._v(" "),t("h4",{attrs:{id:"moi-bat-dau-su-dung-v2ray-toi-can-chu-y-dieu-gi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#moi-bat-dau-su-dung-v2ray-toi-can-chu-y-dieu-gi","aria-hidden":"true"}},[n._v("#")]),n._v(" Mới bắt đầu sử dụng V2Ray, tôi cần chú ý điều gì?")]),n._v(" "),t("p",[n._v("Vì nhiều người dùng V2Ray có kinh nghiệm với Shadowsocks, về cơ bản họ có thể sử dụng V2Ray như Shadowsocks. Tuy nhiên, V2Ray không hoàn toàn giống với Shadowsocks nên chúng tôi sẽ giới thiệu sự khác biệt trong cách sử dụng. Xin lưu ý rằng sự khác biệt không có nghĩa là tốt hay xấu. Bạn nên chọn cấu hình phù hợp với môi trường mạng của bạn.")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("Máy khách: V2Ray chính nó chỉ là một hạt nhân. Máy khách GUI của V2Ray chủ yếu là một vỏ được gọi là kernel V2Ray, tương tự như mối quan hệ giữa nhân Linux và hệ điều hành Linux. Nhưng nhiều khách hàng của Shadowsocks được tác giả triển khai lại giao thức. Nội dung của bài viết này không liên quan đến việc sử dụng máy khách GUI tại thời điểm này.")])]),n._v(" "),t("li",[t("p",[n._v("Proxy chính sách: Có lẽ trí tưởng tượng đầu tiên là PAC. Cho dù bản thân Shadowsocks (cụ thể là Shadowsocks-libev) hay V2Ray đều không hỗ trợ PAC, nó được điều khiển bởi ứng dụng khách. Trong khi Shadowsocks sử dụng ACL, V2Ray sử dụng chức năng định tuyến của nó và chúng tôi không nói cái nào tốt hay xấu. Bạn có thể chọn cái tốt hơn, tùy thuộc vào bạn.")])]),n._v(" "),t("li",[t("p",[n._v("Chia sẻ liên kết / Mã QR: V2Ray không có định dạng URL thống nhất như Shadowsocks, do đó, liên kết / mã QR được chia sẻ của mỗi máy khách đồ họa V2Ray không nhất thiết phải phổ biến. Tuy nhiên, chúng tôi đang nghiên cứu triển khai giao thức của giao thức điểm cuối V2Ray. Nó sẽ cung cấp một liên kết phổ quát cho các khách hàng V2Ray.")])]),n._v(" "),t("li",[t("p",[n._v("Mã hóa: V2Ray (cụ thể là giao thức VMess) không thích Shadowsocks, trong đó nhấn mạnh đến sự lựa chọn mã hóa và mã hóa VMess được chỉ định bởi máy khách, máy chủ có thể thích nghi.")])]),n._v(" "),t("li",[t("p",[n._v("Thời gian: Khi sử dụng giao thức VMess từ V2Ray, bạn cần đảm bảo thời gian chính xác cho cả máy khách và máy chủ, vì đây là thiết kế an toàn.")])]),n._v(" "),t("li",[t("p",[n._v("Mật khẩu: V2Ray (VMesss) chỉ sử dụng UUID, hoạt động như mật khẩu của Shadowsocks, nhưng tính ngẫu nhiên tốt hơn nhiều so với mật khẩu của Shadowsocks, nhưng không thuận tiện để nhớ (mâu thuẫn về an toàn và thuận tiện).")])]),n._v(" "),t("li",[t("p",[n._v("Chuyển tiếp UDP: VMess là giao thức truyền phát dựa trên TCP. Đối với các gói UDP, VMess sẽ được chuyển đổi thành luồng TCP và sau đó chuyển tiếp các gói, tức là UDP qua TCP. Để bật UDP, bạn có thể bật UDP trong giao thức vớ của khách hàng. Tuy nhiên, lưu ý rằng điều này không tốt cho việc tăng tốc chơi game.")])]),n._v(" "),t("li",[t("p",[n._v("Gateway proxy: Trên thực tế, chúng không khác nhau. Đừng nghĩ rằng bạn không thể sử dụng chúng trên bộ định tuyến mà không có plugin.")])])])])},[],!1,null,null,null);h.default=i.exports}}]);