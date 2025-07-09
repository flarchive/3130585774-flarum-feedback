import app from 'flarum/admin/app';
import AdminPage, { AdminHeaderAttrs } from 'flarum/admin/components/AdminPage';
import Avatar from 'flarum/common/components/Avatar';
import LinkButton from 'flarum/common/components/LinkButton';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import { extend } from 'flarum/common/extend';

import User from 'flarum/common/models/User';

import AdminNav from 'flarum/admin/components/AdminNav';

app.initializers.add('mcaxe-feedback', () => {
  extend(AdminNav.prototype, 'items', function (items) {
    items.add(
      'feedback-link',
      <LinkButton icon="fas fa-comment-dots" href="/mcaxe-feedback">
        意见反馈
      </LinkButton>
    );
  });

  app.routes['mcaxe-feedback'] = {
    path: '/mcaxe-feedback',
    component: FeedbackPage,
  };
});

export default class FeedbackPage extends AdminPage {
  feedbacks: any[] = [];
  loading = true;

  pageOffset = 0;
  pageLimit = 20;

  headerInfo(): AdminHeaderAttrs {
    return {
      title: '用户反馈',
      description: '查看用户提交的反馈信息',
      icon: 'fas fa-comment-dots',
      className: 'FeedbackPage',
    };
  }
  oninit(vnode: any) {
    super.oninit(vnode);
    this.loadFeedbacks();
  }

  loadFeedbacks() {
    this.loading = true;

    app
      .request({
        method: 'GET',
        url: app.forum.attribute('apiUrl') + `/mcaxe-flarum-feedbacks-list?page[offset]=${this.pageOffset}&page[limit]=${this.pageLimit}`,
      })
      .then((result: any) => {
        app.store.pushPayload(result);
        this.feedbacks = result.data;
        this.loading = false;
        m.redraw();
      });
  }

  prevPage() {
    if (this.pageOffset >= this.pageLimit) {
      this.pageOffset -= this.pageLimit;
      this.loadFeedbacks();
    }
  }

  nextPage() {
    // if (this.feedbacks.length === this.pageLimit) {
    this.pageOffset += this.pageLimit;
    this.loadFeedbacks();
    // }
  }

  content() {
    return (
      <div className="FeedbackPage-container">
        {this.loading ? (
          <LoadingIndicator />
        ) : (
          <div className="FeedbackPage-grid">
            {this.feedbacks.map((item: any) => {
              const user = item.relationships?.user?.data;
              const userModel = app.store.getById('users', user?.id) as User | undefined;

              if (!userModel) return null;

              return (
                <div className="FeedbackPage-card">
                  <div className="FeedbackPage-user-info">
                    <Avatar user={userModel} className="FeedbackPage-avatar" />
                    <div>
                      <a
                        href={`${app.forum.attribute('baseUrl')}/u/${userModel.username()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="FeedbackPage-username"
                      >
                        {userModel.username()}
                      </a>
                      <p className="FeedbackPage-timestamp">{new Date(item.attributes.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="FeedbackPage-feedback">{item.attributes.feedback}</p>
                </div>
              );
            })}
          </div>
        )}

        {!this.loading && (
          <div className="FeedbackPage-pagination">
            <button className="Button" onclick={() => this.prevPage()} disabled={this.pageOffset === 0}>
              上一页
            </button>
            <button className="Button" onclick={() => this.nextPage()}>
              下一页
            </button>
          </div>
        )}
      </div>
    );
  }
}
