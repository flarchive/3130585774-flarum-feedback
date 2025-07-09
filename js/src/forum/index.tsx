import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import Button from 'flarum/common/components/Button';

import Modal from 'flarum/common/components/Modal';
import Stream from 'flarum/common/utils/Stream';

class FeedbackModal extends Modal {
  feedbackText: any;
  error: any;
  oninit(vnode: any) {
    super.oninit(vnode);
    this.feedbackText = Stream('');
    this.loading = false;
    this.error = null;
  }

  view() {
    return (
      <div className={`Modal ${this.className()}`} role="dialog" aria-modal="true">
        <div className="Modal-content">
          <header className="Modal-header">
            <h3 className="Modal-title">{this.title()}</h3>
          </header>
          {this.content()}
          {this.footer()}
        </div>
      </div>
    );
  }
  className() {
    return 'mcaxe-feedback-modal Modal--small';
  }

  title() {
    return '意见反馈';
  }

  content() {
    return (
      <div className="Modal-body">
        <textarea
          className="FormControl"
          placeholder="请输入您的意见"
          value={this.feedbackText()}
          oninput={(e: { target: { value: any } }) => this.feedbackText(e.target.value)}
          rows="20"
          cols="50"
          required
          style={{ resize: 'none' }}
        ></textarea>
        {this.error && <p className="error">{this.error}</p>}
      </div>
    );
  }

  footer() {
    return (
      <div className="Modal-footer" style={{ display: 'flex', gap: '12px' }}>
        <Button className="Button Button--primary" style={{ flex: 1 }} loading={this.loading} onclick={() => this.submit()}>
          提交
        </Button>
        <Button className="Button" style={{ flex: 1 }} onclick={() => this.hide()}>
          取消
        </Button>
      </div>
    );
  }

  submit() {
    const text = this.feedbackText().trim();
    if (!text) {
      this.error = '反馈内容不能为空';
      return;
    }

    this.loading = true;
    this.error = null;

    app
      .request({
        method: 'POST',
        url: app.forum.attribute('apiUrl') + '/mcaxe-flarum-feedbacks',
        body: {
          feedback: text,
        },
      })
      .then(() => {
        this.loading = false;
        this.hide();
        app.alerts.show({ type: 'success' }, '反馈提交成功，谢谢！');
      })
      .catch(() => {
        this.loading = false;
        this.error = '提交失败，请稍后重试';
      });
  }
}

app.initializers.add('mcaxe-feedback', () => {
  console.log('[mcaxe/flarum-feedback] Hello, forum!');

  extend(IndexPage.prototype, 'view', function (vdom) {
    const FeedbackButton = (
      <div className="mcaxe-feedback-button">
        <Button className="Button Button--primary" onclick={() => app.modal.show(FeedbackModal)}>
          意见反馈
        </Button>
      </div>
    );

    if (!Array.isArray(vdom.children)) {
      vdom.children = vdom.children ? [vdom.children] : [];
    }

    vdom.children.push(FeedbackButton);
  });
});
