# 集成Stripe、Supabase、Google认证、i18n和Ko-fi的Nuxt模板

<div align="center">
  <a href="README.md">English</a> | <a href="README_zh.md">中文</a>
</div>

## 简介
这个模板为构建Nuxt.js应用程序提供了一个即用型的起始套件，集成了多个重要的第三方服务。它旨在简化那些需要订阅管理、国际化、身份认证和捐赠功能的项目的设置过程。

## 特性

- **Stripe集成**：轻松管理支付和订阅。
- **Supabase集成**：利用Supabase实现可扩展的后端服务，包括实时数据库和身份认证。
- **Google认证**：通过Google OAuth实现安全快速的身份认证。
- **i18n（国际化）**：使用Vue I18n提供多语言支持，使您的应用在全球范围内可访问。
- **Ko-fi捐赠**：无缝集成Ko-fi，支持社区贡献和捐赠。
- **Google Analytics**：内置Google Analytics集成，用于跟踪用户行为和网站性能。
- **Product Hunt徽章**：嵌入Product Hunt徽章，展示您的产品，提高可见度和可信度。

## 前提条件

- Node.js（v14或更高版本）
- npm或pnpm
- Stripe账户
- Supabase账户
- Google Cloud Console项目（带有OAuth 2.0凭证）
- Ko-fi账户（可选）

## 开始使用

1. 克隆仓库：
   ```
   git clone https://github.com/your-repo-url.git
   cd your-project-name
   ```

2. 安装依赖：
   ```
   npm install
   ```
   或者如果您使用pnpm：
   ```
   pnpm install
   ```

3. 在根目录创建一个`.env`文件，并添加以下环境变量：

   ```
   OPENAI_API_KEY=your_openai_api_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   STRIPE_SERVER_KEY=your_stripe_server_key
   STRIPE_CLIENT_KEY=your_stripe_client_key
   GOOGLE_CLIENT_ID=your_google_client_id
   PUBLIC_URL=your_public_url
   ```

   将`your_*`替换为您的实际凭证和URL。

4. 更新配置文件：

   - 在`app.vue`中，替换Google Analytics ID：
   
   ```typescript
   const gaScript = document.createElement('script')
   gaScript.async = true
   gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXXXXX' // 更改为您自己的Google Analytics ID
   document.body.appendChild(gaScript)

   gaScript.onload = () => {
     window.dataLayer = window.dataLayer || []
     function gtag(){dataLayer.push(arguments)}
     gtag('js', new Date())
     gtag('config', 'G-XXXXXXXXXXXXX') // 更改为您自己的Google Analytics ID
   }
   ```

   - 在`app.vue`中，更新Ko-fi小部件配置：
   
   ```typescript
   // 更改为您自己的Ko-fi链接
   const kofiScript = document.createElement('script');
   kofiScript.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
   kofiScript.onload = () => {
     // 脚本加载后初始化Ko-fi小部件
     window.kofiWidgetOverlay.draw('buy_victor_a_coffee', {
       'type': 'floating-chat',
       'floating-chat.donateButton.text': '支持我',
       'floating-chat.donateButton.background-color': '#00b9fe',
       'floating-chat.donateButton.text-color': '#fff'
     });
   };
   ```

5. 自定义内容：
   - 更新应用程序中的服务名称、描述和其他文本。寻找类似"更改为您自己的..."的注释，并用您自己的信息替换占位文本。
   - 用您自己的资源替换`public`目录中的logo和favicon。

6. 更新`i18n.config.ts`中的i18n翻译，以匹配您的服务内容。

7. 设置您的Stripe产品和价格，然后更新`pages/price.vue`中的价格ID：
   
   ```vue
   <button @click="() => handleCheckout('price_xxxx')" id="checkout-button-basic" class="h-10 text-sm font-medium rounded text-blue-900 text-center w-full bg-white active:scale-95 transition-transform">选择此计划</button>
   ```
   
   ```vue
   <button @click="() => handleCheckout('price_xxxx')" id="checkout-button-pro" class="h-10 text-sm font-medium rounded text-blue-900 text-center w-full bg-white active:scale-95 transition-transform">选择此计划</button>
   ```

8. 配置您的Supabase数据库，并更新server目录中的相关API调用。

9. 在Google Cloud Console中设置Google OAuth 2.0凭证，并确保正确设置了授权的JavaScript来源和重定向URI。

## 运行应用程序

要在开发模式下运行应用程序：

```bash
npm run dev
```

或者使用pnpm：

```bash
pnpm run dev
```

## 生产环境构建

要为生产环境构建应用程序：

```bash
npm run build
```

或者使用pnpm：

```bash
pnpm run build
```


## 部署

此模板配置为易于在Vercel上部署。确保在Vercel项目设置中设置您的环境变量。

对于其他托管平台，请参考它们各自的文档来部署Nuxt 3应用程序。

## 自定义

- Tailwind CSS：模板使用Tailwind CSS进行样式设计。您可以在`tailwind.config.js`中自定义主题。
- 组件：在`components`目录中添加或修改组件。
- 页面：在`pages`目录中更新或添加新页面。
- API路由：服务器端API路由位于`server/api`目录中。

## 重要注意事项

- 始终替换占位内容，特别是在法律页面中，如服务条款、隐私政策和退款政策。
- 确保所有API密钥和敏感信息都保持安全，不要提交到版本控制中。
- 在上线之前，彻底测试，特别是支付流程和身份认证。

## 支持

如有任何问题或疑问，请在GitHub仓库中开一个issue或联系模板维护者。

## 许可证

[MIT许可证](LICENSE)