import React, { PureComponent } from 'react';
//import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import Image from './Image';
import Loading from './Loading';
import Error from './Error';

class View extends PureComponent{
  static defaultProps = {
    RenderSearchInput: SearchInput,
    RenderImage: Image,
    RenderLoading: Loading,
    RenderError: Error,
  };

  render = () => {
    const {
      initialQuery,
      onLoad,
      loading,
      data,
      error,
      RenderLoading,
      RenderError,
      RenderImage,
      RenderSearchInput
    } = this.props;

    let renderContent = null;
    if (loading) {
      renderContent = <RenderLoading />;
    } else if (error) {
      renderContent = <RenderError error={error} />;
    } else {
      renderContent = <RenderImage src={data} />;
    }

    return (
      <div>
        <RenderSearchInput initialQuery={initialQuery} onSearch={onLoad}/>
        <section>
          {renderContent}
        </section>
      </div>
    );
  }
}
/*

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  src: PropTypes.string,
  initialQuery: PropTypes.string.isRequired,
  renderImage: PropTypes.func,
  renderLoading: PropTypes.func,
  renderError: PropTypes.func,
};
*/

export default View;
