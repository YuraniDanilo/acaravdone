// components/ErrorBoundary.jsx
"use client";
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold">Algo deu errado</h2>
          <p className="mt-4 text-gray-600">Por favor recarregue a página ou volte ao início.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
