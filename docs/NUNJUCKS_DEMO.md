# 🎯 Nunjucks Demo Features

This document explains the advanced Nunjucks templating features demonstrated in our `/nunjucks-demo/` page.

## 📊 Features Demonstrated

### **1. Data Processing & Statistics**
- **Member counting**: `{{ members | length }}`
- **Filtering**: `{{ members | selectattr('feed') | list }}`
- **Mathematical operations**: `{{ (membersWithFeeds | length) / (members | length) * 100) | round }}`
- **Pattern matching**: `{{ members | selectattr('url', 'match', '.*\\.co\\.za.*') | list }}`

### **2. Advanced Loops & Conditionals**
```njk
{% for member in members %}
    {% if member.feed %}
        <!-- Member has RSS feed -->
    {% else %}
        <!-- Member doesn't have RSS feed -->
    {% endif %}
{% endfor %}
```

### **3. Sorting & Filtering**
```njk
<!-- Sort by attribute -->
{% for member in members | sort(attribute='title') %}

<!-- Complex filtering -->
{% set membersWithFeeds = members | selectattr('feed') | list %}
```

### **4. String Manipulation**
```njk
{{ member.title | upper }}           <!-- UPPERCASE -->
{{ member.title | lower }}           <!-- lowercase -->
{{ member.title | title }}           <!-- Title Case -->
{{ member.title | truncate(15) }}    <!-- Truncated -->
{{ member.title | replace(' ', '-') }} <!-- Slug format -->
```

### **5. Dynamic Styling**
```njk
{% set themes = [
    {name: 'ocean', bg: '#e3f2fd', border: '#1976d2'},
    {name: 'sunset', bg: '#fff3e0', border: '#ff9800'}
] %}

{% for member in members %}
    {% set theme = themes[loop.index0 % themes|length] %}
    <div style="background: {{ theme.bg }}; border: 2px solid {{ theme.border }};">
        {{ member.title }}
    </div>
{% endfor %}
```

### **6. Custom Macros**
```njk
{% macro memberBadge(member, style='default') %}
    {% set styles = {
        'default': {bg: '#e3f2fd', color: '#1976d2'},
        'success': {bg: '#e8f5e8', color: '#4caf50'}
    } %}
    <span style="background: {{ styles[style].bg }};">
        {{ member.title }}
    </span>
{% endmacro %}

<!-- Usage -->
{{ memberBadge(member, 'success') }}
```

### **7. Complex Data Analysis**
```njk
<!-- Domain counting -->
{% set domainCounts = {} %}
{% for member in members %}
    {% set domain = member.url | replace('https://', '') | split('/')[0] %}
    {% if domainCounts[domain] %}
        {% set domainCounts = domainCounts | merge({[domain]: domainCounts[domain] + 1}) %}
    {% else %}
        {% set domainCounts = domainCounts | merge({[domain]: 1}) %}
    {% endif %}
{% endfor %}
```

### **8. Mathematical Projections**
```njk
<!-- Growth calculations -->
{% for month in range(1, 7) %}
    {% set projected = (members | length * (1.2 ** month)) | round %}
    Month {{ month }}: ~{{ projected }} members
{% endfor %}
```

### **9. Conditional Logic**
```njk
{% if members | length >= 10 %}
    <p>Large Community!</p>
{% elif members | length >= 5 %}
    <p>Growing Community!</p>
{% else %}
    <p>Small but Mighty!</p>
{% endif %}
```

### **10. Advanced Filters**
```njk
{{ members | first(3) }}              <!-- First 3 items -->
{{ members | selectattr('feed') }}     <!-- Items with 'feed' property -->
{{ members | sort(attribute='title') }} <!-- Sort by title -->
{{ members | reverse }}               <!-- Reverse order -->
{{ members | unique }}                <!-- Remove duplicates -->
```

## 🎨 Practical Applications

### **Statistics Dashboard**
- Member counts and percentages
- Feed adoption rates
- Domain analysis
- Growth projections

### **Dynamic Content**
- Theme-based styling
- Conditional messaging
- Responsive layouts
- Data-driven navigation

### **Content Processing**
- Text transformations
- URL manipulation
- Data validation
- Format conversion

### **Reusable Components**
- Custom macros for repeated elements
- Parameterized templates
- Modular design patterns
- Component libraries

## 🚀 Benefits Over Basic Templating

1. **Data Processing**: Complex calculations and analysis
2. **Logic Implementation**: Business rules and conditions
3. **Dynamic Generation**: Content based on data state
4. **Code Reusability**: Macros and includes
5. **Maintainability**: Centralized template logic
6. **Performance**: Server-side processing
7. **Flexibility**: Adaptable to changing data

## 📚 Learning Resources

- **Nunjucks Documentation**: https://mozilla.github.io/nunjucks/
- **Template Inheritance**: Layouts and blocks
- **Custom Filters**: Extending functionality
- **Async Templates**: Advanced rendering
- **Security**: Safe templating practices

## 🎯 Next Steps

The demo shows how Nunjucks can:
- Replace complex JavaScript logic
- Generate dynamic CSS and HTML
- Process and analyze data
- Create reusable template components
- Build sophisticated web applications

This makes Nunjucks a powerful tool for static site generation, content management, and dynamic web applications! 🎉