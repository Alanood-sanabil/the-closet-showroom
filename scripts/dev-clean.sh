#!/bin/bash
# Clean development script to prevent multiple dev servers

echo "🧹 Stopping any existing Next.js dev servers..."
pkill -f "next dev" 2>/dev/null
pkill -f "next-server" 2>/dev/null

echo "⏳ Waiting for processes to terminate..."
sleep 2

echo "🗑️  Clearing Next.js cache..."
rm -rf .next

echo "🔍 Checking if port 3000 is available..."
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "❌ ERROR: Port 3000 is already in use!"
    echo "   Run: lsof -i :3000 to see what's using it"
    exit 1
fi

echo "✨ Starting fresh dev server on port 3000..."
npx next dev -p 3000
