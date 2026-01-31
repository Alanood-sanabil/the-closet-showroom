# Supabase RLS Policy Setup

## Important: Run These SQL Commands in Supabase Dashboard

To allow public form submissions while keeping RLS enabled, run these SQL commands in your Supabase SQL Editor.

### 1. Customer Requests Table

```sql
-- Enable RLS on customer_requests table
ALTER TABLE customer_requests ENABLE ROW LEVEL SECURITY;

-- Allow public INSERT (form submissions)
CREATE POLICY "Allow public insert on customer_requests"
ON customer_requests
FOR INSERT
TO public
WITH CHECK (true);

-- Allow authenticated SELECT (admin dashboard)
CREATE POLICY "Allow authenticated select on customer_requests"
ON customer_requests
FOR SELECT
TO authenticated
USING (true);
```

### 2. Brand Applications Table

```sql
-- Enable RLS on brand_applications table
ALTER TABLE brand_applications ENABLE ROW LEVEL SECURITY;

-- Allow public INSERT (form submissions)
CREATE POLICY "Allow public insert on brand_applications"
ON brand_applications
FOR INSERT
TO public
WITH CHECK (true);

-- Allow authenticated SELECT (admin dashboard)
CREATE POLICY "Allow authenticated select on brand_applications"
ON brand_applications
FOR SELECT
TO authenticated
USING (true);
```

## Verification

After running these commands:

1. Test customer form submission - should work without errors
2. Test brand application submission - should work without errors
3. Check Supabase Table Editor to see the submitted data

## What These Policies Do

- **INSERT Policy (public)**: Allows anyone (anonymous users) to insert new rows via the public forms
- **SELECT Policy (authenticated)**: Restricts viewing data to authenticated users only (for future admin auth)
- **RLS Enabled**: Row Level Security is on, so only the specific policies you define will work

## Troubleshooting

If you still get "new row violates row-level security policy" errors:

1. Check that RLS is enabled: `ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;`
2. Verify the policy exists: Check "Authentication > Policies" in Supabase Dashboard
3. Ensure the policy targets `public` role and uses `WITH CHECK (true)`
4. Drop and recreate the policy if needed:
   ```sql
   DROP POLICY IF EXISTS "Allow public insert on customer_requests" ON customer_requests;
   ```
