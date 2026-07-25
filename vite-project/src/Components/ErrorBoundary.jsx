import { Component } from "react";

class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Unhandled error while rendering:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ error: null });
  };

  render() {
    const { error } = this.state;

    if (!error) {
      return this.props.children;
    }

    return (
      <div role="alert" className="error-boundary">
        <h1>Something went wrong.</h1>
        <p>{error.message || String(error)}</p>
        <button type="button" onClick={this.handleRetry}>
          Try again
        </button>
      </div>
    );
  }
}

export default ErrorBoundary;
